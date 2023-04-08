import React from 'react'
import { useParams } from 'react-router'

import { UiButton, UiModal } from '@/components/Ui'

const OrderModal = () => {
  const { telegram_bot_link } = useAppSelector((state) => state.sessionState)

  const params = useParams()

  return (
    <UiModal name="order" title="ОФОРМЛЕНИЕ ЗАКАЗА" titleIcon="cart-success">
      <p className="modal__text">
        Оформление заказа продолжится в телеграм-боте! <br />
        Спасибо, что пользуетесь нашим сервисом!
      </p>
      <div className="modal__action">
        <UiButton
          as="a"
          target="_blank"
          rel="noreferrer"
          size="small"
          href={`${telegram_bot_link}?start=item_${params.id}`}
          block={true}
        >
          Перейти в бот-чат
        </UiButton>
      </div>
    </UiModal>
  )
}

export default OrderModal
