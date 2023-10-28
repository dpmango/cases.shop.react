import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { getPayment, getPaymentStatus } from '@/core/api'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getProfileThunk } from '@/core/store/session.store'
import { closeModals } from '@/core/store/ui.store'
import { formatPrice, openExternalLink } from '@/core/utils'

import {
  Close2Icon,
  Close3Icon,
  MinusIcon,
  PayAnypayIcon,
  PayLavaIcon,
  PayPaypalIcon,
  PlusIcon,
  UiModal,
} from '../Ui'

interface IWatchPayment {
  id: string
  date: Date
}

export const DepositModal: React.FC<{}> = ({}) => {
  const { paymentsMethods, user } = useAppSelector((state) => state.sessionState)
  const { modalParams } = useAppSelector((state) => state.uiState)

  const [sum, setSum] = useState(1000)
  const [selectedPayment, setSelectedPayment] = useState(paymentsMethods[0]?.id)
  const [watchPayment, setWatchPayment] = useState<IWatchPayment | null>(null)

  const dispatch = useAppDispatch()

  const selectedPaymentData = useMemo(() => {
    return paymentsMethods.find((x) => x.id === selectedPayment)
  }, [paymentsMethods, selectedPayment])

  const minMax = useMemo(() => {
    return [selectedPaymentData?.min || 10, selectedPaymentData?.max || 10000]
  }, [selectedPaymentData])

  const sumOptions = useMemo(() => {
    return [100, 200, 500, 1000, 5000, 10000].filter((s) => s >= minMax[0] && s <= minMax[1])
  }, [minMax])

  const stepOnPrice = useMemo(() => {
    return 100
    // if (sum <= 100) {
    //   return 10
    // } else if (sum <= 1000) {
    //   return 100
    // } else if (sum <= 1000 * 100) {
    //   return 1000
    // } else {
    //   return 5000
    // }
  }, [sum])

  const handleSumInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value)

    if (!isFinite(value)) {
      // @ts-expect-error
      value = e.target.value
    }

    setSum(value)
  }

  const isBtnDisabled = useMemo(() => {
    if (!isFinite(sum) || sum < minMax[0]) {
      return true
    }

    return false
  }, [sum])

  const handleMinusClick = useCallback(() => {
    let v = sum - stepOnPrice
    if (v <= minMax[0]) v = minMax[0]
    setSum(v)
  }, [sum, stepOnPrice, minMax])

  const handlePlusClick = useCallback(() => {
    let v = sum + stepOnPrice
    if (v >= minMax[1]) v = minMax[1]
    setSum(v)
  }, [sum, stepOnPrice, minMax])

  const handleSubmit = useCallback(async () => {
    const { data, error } = await getPayment({
      sum,
      paymentId: selectedPayment,
    })

    if (error) {
      toast.error(error.message || 'Ошибка, попробуйте снова')
    }

    if (data) {
      const cookieObject = {
        id: data.id,
        date: dayjs().toDate(),
      }
      setCookie('paymentWatch', cookieObject)
      setWatchPayment(cookieObject)
      openExternalLink(data.url)
      dispatch(closeModals())
    }
  }, [sum, selectedPayment])

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  useEffect(() => {
    const cookieWatch = getCookie('paymentWatch')
    const cookieWatchJSON = cookieWatch ? JSON.parse(cookieWatch) : null
    if (cookieWatchJSON && !watchPayment) setWatchPayment(cookieWatchJSON)
    if (!watchPayment?.date) return

    const dateDiff = dayjs().diff(dayjs(watchPayment.date), 'minutes')
    if (dateDiff >= 60) return

    const requestIds = async () => {
      const dateDiff = dayjs().diff(dayjs(watchPayment.date), 'minutes')
      if (dateDiff >= 60) return

      const { data, error } = await getPaymentStatus(watchPayment.id)
      if (data.completed) {
        await dispatch(getProfileThunk())
        deleteCookie('paymentWatch')
        setWatchPayment(null)
      }
    }

    requestIds()
    timer.current = setInterval(requestIds, 15 * 1000)

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [watchPayment])

  useEffect(() => {
    if (modalParams?.sum) {
      let sumToSet = modalParams?.sum as number
      if (sumToSet < minMax[0]) sumToSet = minMax[0]
      setSum(sumToSet)
    } else {
      // setSum(1000)
    }
  }, [modalParams])

  return (
    <UiModal className="modal-def" name="balance">
      <div className="modal-def__wrap">
        <div className="modal-def__content modal-content">
          <div className="modal-content__mob">
            <div
              className="modal-content__prev close-btn modal-def__close"
              onClick={() => dispatch(closeModals())}
            >
              <Close3Icon />
            </div>
            <div className="modal-content__mob-title">Баланс</div>
          </div>
          <div
            className="modal-content__close modal-def__close close-btn"
            onClick={() => dispatch(closeModals())}
          >
            <Close2Icon />
          </div>
          <div className="modal-content__balance">
            <div className="modal-content__title title-def title-def_sec">Пополнить баланс</div>
            <div className="modal-content__block">
              <div className="title-small title-small_m">Сумма пополнения, ₽</div>
              <div className="balance-add">
                <div className="balance-add__in">
                  <button className="balance-add__btn" onClick={handleMinusClick}>
                    <MinusIcon />
                  </button>
                  <div className="balance-add__inpWrap">
                    <input
                      className="balance-add__inp"
                      type="number"
                      min={minMax[0]}
                      max={minMax[1]}
                      value={sum}
                      onChange={handleSumInputChange}
                    />
                  </div>
                  <button className="balance-add__btn" onClick={handlePlusClick}>
                    <PlusIcon />
                  </button>
                </div>
                <div className="balance-add__tags tags">
                  {sumOptions.map((s, idx) => (
                    <button
                      className={cns('tags__el', s === sum && 'active')}
                      key={idx}
                      onClick={() => setSum(s)}
                    >
                      {formatPrice(s, 0, false)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-content__block">
              <div className="title-small title-small_m">Способ оплаты</div>
              <div className="payment-choose">
                {paymentsMethods.map((pay, idx) => (
                  <div className={'payment-choose__el'} key={idx}>
                    <div
                      className={cns('payment-choose-el', pay.id === selectedPayment && 'active')}
                    >
                      <div
                        className="payment-choose-el__top"
                        onClick={() => setSelectedPayment(pay.id)}
                      >
                        <div className="payment-choose-el__title">{pay.name}</div>
                        {pay.id === 'lavaru' && <PayLavaIcon />}
                        {pay.id === 'paypalych' && <PayPaypalIcon />}
                        {pay.id === 'anypay' && <PayAnypayIcon />}

                        {!['lavaru', 'paypalych', 'anypay'].includes(pay.id) && (
                          <img loading="lazy" src={pay.icon} alt={pay.name} />
                        )}
                      </div>
                      <div
                        className="payment-choose-el__dropdown"
                        style={{ display: pay.id === selectedPayment ? 'block' : 'none' }}
                      >
                        <div className="payment-choose-el__text text-cat">
                          Выбирая данную платёжную систему, вы соглашаетесь с её политикой{' '}
                          <Link href={`/page/${pay.customPageId}`}>
                            обработки персональных данных
                          </Link>
                          .
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={cns(
                  'btn-def btn-def_full modal-content__btn',
                  isBtnDisabled && 'btn-def_gray',
                )}
                onClick={handleSubmit}
              >
                <span>Оплатить</span>
              </button>
            </div>
          </div>
        </div>
        <div className="modal-def__overlay overlay" onClick={() => dispatch(closeModals())}></div>
      </div>
    </UiModal>
  )
}
