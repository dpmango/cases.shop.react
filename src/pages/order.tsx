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

  const { user } = useAppSelector((store) => store.sessionState)

  console.log({ orderDataStore })
  const router = useRouter()
  const dispatch = useAppDispatch()

  const orderId = router.query.id as string

  const hasSteamData = !!orderDataStore?.form?.fields.find((x) => x === 'steam_login')
  const productPrice = orderDataStore?.item.price.salePrice

  const balanceDiff = useMemo(() => {
    if (!productPrice || !user?.balance) return null
    return user?.balance - productPrice
  }, [user?.balance, productPrice])

  const notEnoughBalance = balanceDiff === null || balanceDiff < 0

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

                  {selectedPlatform && (
                    <>
                      {orderDataStore.instructions &&
                        orderDataStore.instructions.map((i, idx) => (
                          <OrderInstruction {...i} key={idx} />
                        ))}

                      {orderDataStore.form && (
                        <OrderForm {...orderDataStore.form} syncForm={(v) => setFormData(v)} />
                      )}

                      {hasSteamData && (
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

                      {hasSteamData && <OrderSteamDeposit syncForm={(v) => setSteamDeposit(v)} />}
                    </>
                  )}
                </div>

                {notEnoughBalance && (
                  <p className="text-info">Недостаточно баланса для совершения покупки</p>
                )}

                {selectedPlatform && (
                  <button
                    className={cns(
                      'btn-def btn-def_full btn-def_min sec-order__btn',
                      notEnoughBalance && '_nobalance',
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

// const MOCK_ORDER = {
//   product: {
//     category: {
//       icon: '../img/cat/fortnite.svg',
//       name: 'Fortnite',
//     },
//     name: 'Название товара',
//     description: 'Описание',
//     icon: '../img/bg/3.jpg',
//     features: {
//       title: 'В наборе',
//       list: ['a', 'b', 'c'],
//     },
//     note: 'Примечание мелким текстом',
//     price: {
//       salePrice: 850,
//       price: 1000,
//     },
//   },
//   // instructions: {
//   //   title: 'Как это работает?',
//   //   text: [
//   //     'Мы используем способ активации через учетную запись Xbox (Microsoft). Достаточно привязать к вашей основной учётной записи Epic Games — учетную запись Xbox (Microsoft). При этом сама консоль вам НЕ ПОНАДОБИТСЯ.',
//   //     'Fortnite поддерживает кроссплатформенный прогресс, поэтому любая ваша покупка будет ДОСТУПНА на всех платформах, исключение это <span>Вбаксы на Nintendo Switch</span>',
//   //   ],
//   //   list: {
//   //     title: 'Важные правила при смене региона',
//   //     list: [
//   //       'Не производить никаких операций с кошельком Steam после смены региона в течении 3 дней (72 часов с момента выполнения заказа) Например: торговая площадка, пополнения счета, покупка игр.',
//   //     ],
//   //   },
//   //   warning: {
//   //     title: 'Что обязательно должно быть сделано перед покупкой',
//   //     list: [
//   //       {
//   //         text: 'К вашей учетной записи Epic Games должна быть привязана учётная запись Xbox (Microsoft). Консоль для этого не требуется.',
//   //         link: {
//   //           name: 'Инструкция от EpicGames',
//   //           href: 'https://google.com',
//   //         },
//   //       },
//   //       {
//   //         text: 'Ваш возраст в аккаунте Microsoft должен быть старше 18 лет. Для этого просто установите год рождения на 2000 г.',
//   //       },
//   //     ],
//   //   },
//   // },
//   // form: {
//   //   title: 'Логин и пароль от аккаунта Microsoft который привязан к вашей учётной записи с игрой',
//   //   description:
//   //     'Используя логин и пароль мы сможем войти в вашу учётную запись со страны где донат разрешён и произвести операцию покупки необходимого вам товара. Покупка будет осуществляться в официальном магазине Microsoft.',
//   //   fields: ['login', 'password'],
//   // },
//   balanceDeposit: {
//     min: 1,
//     max: 10000,
//     commission: {
//       type: 'percent',
//       value: 2,
//     },
//     bankFees: {
//       type: 'percent',
//       value: 0.5,
//     },
//   },
// } as IOrderDto
