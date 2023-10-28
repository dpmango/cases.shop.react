import cns from 'classnames'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { LayoutGeneral } from '@/components/Layout'
import {
  OrderForm,
  OrderInstruction,
  OrderPlatformSelect,
  OrderProductScope,
} from '@/components/Order'
import { IOrderFormField } from '@/components/Order/Form'
import { OrderSteamDeposit } from '@/components/Order/SteamDeposit'
import { createOrder, getOrderForm } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { setModal } from '@/core/store/ui.store'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)
  const orderId = context.query.id as string
  const accessToken = context.req.cookies['access_token']

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'order',
      resolver: getOrderForm({ item_id: orderId, accessToken }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, orderData } = await Resolver(promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
      shopId,
      orderData,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Page({
  orderData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [orderDataStore, setOrderDataStore] = useState(orderData)
  const [formData, setFormData] = useState<IOrderFormField[]>([])
  const [steamDeposit, setSteamDeposit] = useState<number>(0)
  const [steamLoginValid, setSteamLoginValid] = useState<boolean | null>(null)

  const { user } = useAppSelector((store) => store.sessionState)

  console.log({ orderDataStore })
  const router = useRouter()
  const dispatch = useAppDispatch()

  const orderId = router.query.id as string

  const hasSteamData = !!orderDataStore?.form?.fields.find((x) => x === 'steam-login')
  const productPrice = orderDataStore?.item.price.salePrice

  const balanceDiff = useMemo(() => {
    if (!productPrice || !user?.balance) return null
    return user?.balance - productPrice
  }, [user?.balance, productPrice])

  const notEnoughBalance = useMemo(() => {
    if (process.env.ORDER_TEST_MODE) return false

    return balanceDiff === null || balanceDiff < 0
  }, [balanceDiff])

  const showSecondStep = useMemo(() => {
    if (!orderDataStore?.platforms) return true
    return !!selectedPlatform
  }, [orderDataStore?.platforms, selectedPlatform])

  const showSteamForm = useMemo(() => {
    if (!showSecondStep) return false

    return steamLoginValid
  }, [showSecondStep, steamLoginValid])

  const btnDisabled = useMemo(() => {
    if (hasSteamData) {
      return !showSteamForm || notEnoughBalance
    }

    return notEnoughBalance
  }, [hasSteamData, showSteamForm, notEnoughBalance])

  const handlePlatformSelect = async (id: string) => {
    setSelectedPlatform(id)

    const { data, error } = await getOrderForm({ item_id: orderId, platform: id })

    if (data) {
      setOrderDataStore(data)
    }
    if (error) {
      toast.error(error.message || 'Ошибка, обратитесь к администратору')
    }
  }

  const handleCreateOrder = async () => {
    if (!selectedPlatform) return

    if (notEnoughBalance) {
      dispatch(
        setModal({
          name: 'balance',
          params: {
            sum: Math.abs(balanceDiff || productPrice || 0),
          },
        }),
      )
      return
    }

    const { data, error } = await createOrder({
      item_id: orderId,
      platform: selectedPlatform,
      fields: formData,
      steamDeposit,
    })

    if (data) {
      router.push('/my/orders')
      toast.success(`Заказ ${data.order_id} оформлен`)
    }
    if (error) {
      if (error.message === 'insufficient-balance') {
        toast.error('Недостаточно баланса для совершения покупки')
        dispatch(setModal({ name: 'balance' }))
        return
      }
      toast.error(error.message || 'Ошибка, обратитесь к администратору')
    }
  }

  if (!orderDataStore) {
    router.push('/')
    return
  }

  return (
    <LayoutGeneral>
      <Head>
        <title>Заказ</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-page sec-order">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Оформление заказа</div>
            </div>
            <div className="sec-order__content">
              <div className="sec-order__sidebar">
                <OrderProductScope
                  product={orderDataStore.item}
                  category={orderDataStore.category}
                />
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  {orderDataStore.platforms && (
                    <OrderPlatformSelect
                      platforms={orderDataStore.platforms}
                      currentPlatform={selectedPlatform}
                      onPlatformSelect={handlePlatformSelect}
                    />
                  )}

                  {showSecondStep && (
                    <>
                      {orderDataStore.instructions &&
                        orderDataStore.instructions.map((i, idx) => (
                          <OrderInstruction {...i} key={idx} />
                        ))}

                      {orderDataStore.form && (
                        <OrderForm
                          {...orderDataStore.form}
                          steamLoginValid={steamLoginValid}
                          setSteamLoginValid={setSteamLoginValid}
                          syncForm={(v) => setFormData(v)}
                        />
                      )}

                      {showSteamForm && (
                        <div className="sec-order__block block-border block-info">
                          <div className="block-info__title title-def title-def_sec2">
                            Steam Guard
                          </div>
                          <div className="text-cat">
                            Когда наш оператор возьмет заказ в работу, он свяжется с вами через
                            Телеграм чтобы вы сообщили код Steam Guard.
                          </div>
                        </div>
                      )}

                      {showSteamForm && <OrderSteamDeposit syncForm={(v) => setSteamDeposit(v)} />}
                    </>
                  )}
                </div>

                {notEnoughBalance && (
                  <p className="text-info">Недостаточно баланса для совершения покупки</p>
                )}

                {showSecondStep && (
                  <button
                    className={cns(
                      'btn-def btn-def_full btn-def_min sec-order__btn',
                      btnDisabled && '_nobalance',
                    )}
                    onClick={handleCreateOrder}
                  >
                    <span>Оформить заказ</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
