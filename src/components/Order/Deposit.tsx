import cns from 'classnames'
import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'

import { getPayment } from '@/core/api'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { closeModals } from '@/core/store/ui.store'
import { formatPrice } from '@/core/utils'

import { Close2Icon, Close3Icon, MinusIcon, PlusIcon, UiModal } from '../Ui'

export const DepositModal: React.FC<{}> = ({}) => {
  const { paymentsMethods, id: shopId } = useAppSelector((state) => state.sessionState)

  const [sum, setSum] = useState(1000)
  const [selectedPayment, setSelectedPayment] = useState(paymentsMethods[0]?.id)

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
    const { data } = await getPayment({
      shopId,
      sum,
      paymentId: selectedPayment,
    })

    dispatch(closeModals())
  }, [])

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
                      onChange={(e) => setSum(parseInt(e.target.value))}
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
                        {/* <PayPaypalIcon /> */}
                        <img src={pay.icon} alt={pay.name} />
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
              <button className="btn-def btn-def_full modal-content__btn" onClick={handleSubmit}>
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
