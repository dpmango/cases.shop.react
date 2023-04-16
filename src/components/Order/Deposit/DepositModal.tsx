import cns from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'

import { UiButton, UiInput, UiModal } from '@/components/Ui'

const DepositModal = () => {
  const [amount, setAmount] = useState(100)
  const [paymentOption, setPaymentOption] = useState<string | null>(null)

  const { settings, paymentsType } = useAppSelector((state) => state.sessionState)

  const generateLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await getPayment({ amount })

    if (data) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.setAttribute('style', 'display: none')
      a.href = data.url
      a.target = '_blank'
      a.click()
      document.body.removeChild(a)
    }
  }
  const paymentOptions = useMemo(() => {
    return [
      ...paymentsType.map((x) => {
        const [name, id, img, min, max] = x
        return {
          id: id,
          src: img,
        }
      }),
    ]
  }, [paymentsType])

  return (
    <UiModal name="deposit" title="ПОПОЛНЕНИЕ БАЛАНСА" titleIcon="download">
      <>
        {settings.paymentLogo && (
          <div className="modal__decor-image">
            <img src={settings.paymentLogo} alt="" />
          </div>
        )}

        <form className="modal__form" onSubmit={generateLink}>
          <UiInput
            type="number"
            name="sum"
            min={100}
            placeholder="Введите сумму"
            value={amount}
            max={999999}
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
                  <img src={x.src} alt={x.id} />
                </label>
              ))}
            </div>
          </div>

          <div className="modal__actions">
            <UiButton type="submit" size="small" block={true} disabled={!paymentOption}>
              Пополнить
            </UiButton>
          </div>
        </form>
      </>
    </UiModal>
  )
}

export default DepositModal
