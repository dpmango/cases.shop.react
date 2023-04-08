import { UiButton, UiInput, UiModal } from '@c/Ui'
import cns from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'

const DepositModal = () => {
  const [amount, setAmount] = useState(0)
  const [paymentOption, setPaymentOption] = useState<string | null>(null)

  const generateLink = async () => {
    const { data } = await getPayment({ amount })

    if (data) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.setAttribute('style', 'display: none')
      a.href = data.payment_link
      a.target = '_blank'
      a.click()
      document.body.removeChild(a)
    }
  }

  const paymentOptions = useMemo(() => {
    return [
      {
        id: 'credit_card',
        src: '/img/payment/payment-cc.png',
        srcset: '/img/payment/payment-cc@2x.png 2x',
      },
      {
        id: 'qiwi',
        src: '/img/payment/payment-qiwi.png',
        srcset: '/img/payment/payment-qiwi@2x.png 2x',
      },
      {
        id: 'yoomoney',
        src: '/img/payment/payment-cc.png',
        srcset: '/img/payment/payment-cc@2x.png 2x',
      },
    ]
  }, [])

  return (
    <UiModal name="deposit" title="ПОПОЛНЕНИЕ БАЛАНСА" titleIcon="download">
      <div className="modal__decor-image">
        <img src={'/img/decor/modal-deposit.jpg'} alt="" />
      </div>
      <form className="modal__form" onSubmit={generateLink}>
        <UiInput
          type="number"
          name="sum"
          min={100}
          placeholder="Введите сумму"
          value={amount}
          max={99999}
          onChange={(v) => setAmount(+v)}
        />

        <div className="modal__options">
          <div className="payment-options">
            {paymentOptions.map((x) => (
              <label
                key={x.id}
                className={cns(paymentOption === x.id && '_active')}
                onClick={() => setPaymentOption(x.id)}
              >
                <img src={x.src} srcSet={x.srcset} alt={x.id} />
              </label>
            ))}
          </div>
        </div>

        <div className="modal__actions">
          <UiButton type="submit" size="small" block={true}>
            Пополнить
          </UiButton>
        </div>
      </form>
    </UiModal>
  )
}

export default DepositModal
