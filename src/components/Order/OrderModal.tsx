import React from 'react'

import Close from '@/assets/img/close.png'

const OrderModal = () => {
  const { telegram_bot_link } = useAppSelector((state) => state.sessionState)

  return (
    <div
      style={{
        display: 'none',
      }}
    >
      <div className="box-modal" id="a3">
        <div className="popup">
          <div className="popup-call__box">
            <div className="box-modal__close articmodal-close">
              <img src={Close} alt="" className="close__pic svg" />
            </div>
            <div className="popup__flex d-flex">
              <img src="@/assets/img/personal3.png" alt="" />
              <p>ОФОРМЛЕНИЕ ЗАКАЗА</p>
            </div>
            <p className="popup__text">
              Оформление заказа продолжится в телеграм-боте! <br />
              Спасибо, что пользуетесь нашим сервисом!
            </p>
            <a
              href={`${telegram_bot_link}?start=item_${333}`}
              target={'_blank'}
              className="popup__btn bttn"
              rel="noreferrer"
            >
              Перейти в чат-бота
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderModal
