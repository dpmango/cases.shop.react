import { UiButton, UiModal } from '@/components/Ui'

const DepositSuccessModal = () => {
  const { telegram_bot_link } = useAppSelector((state) => state.sessionState)

  return (
    <UiModal name="deposit-success" title="ПОПОЛНЕНИЕ БАЛАНСА" titleIcon="checkmark-circle">
      <>
        <p className="modal__text p-main">
          Ваш баланс пополнен успешно! <br />
          Дальнешее оформление заказа продолжится в чат-боте!
        </p>

        {telegram_bot_link && (
          <div className="modal__action">
            <UiButton as="a" size="small" target="_blank" href={telegram_bot_link} block={true}>
              Перейти в бот-чат
            </UiButton>
          </div>
        )}
      </>
    </UiModal>
  )
}

export default DepositSuccessModal
