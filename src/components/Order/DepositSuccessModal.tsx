import { UiButton, UiModal } from '@c/Ui'
import React from 'react'

const DepositSuccessModal = () => {
  const { telegram_bot_link } = useAppSelector((state) => state.sessionState)

  return (
    <UiModal name="deposit-success" title="ПОПОЛНЕНИЕ БАЛАНСА" titleIcon="checkmark-circle">
      <>
        <p className="modal__text">
          Ваш баланс пополнен успешно! <br />
          Дальнешее оформление заказа продолжится в чат-боте!
        </p>

        {telegram_bot_link && (
          <div className="modal__action">
            <UiButton as="a" size="small" href={telegram_bot_link} block={true}>
              Перейти в бот-чат
            </UiButton>
          </div>
        )}
      </>
    </UiModal>
  )
}

export default DepositSuccessModal
