import React from 'react'

import Close from '@/assets/img/close.png'
import Personal3 from '@/assets/img/personal3.png'

const OrderModal = () => {
  const { internal_name: internalName } = useAppSelector((state) => state.sessionState)

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
              <img src={Personal3} alt="" />
              <p>ОФОРМЛЕНИЕ ЗАКАЗА</p>
            </div>
            <p className="popup__text">
              Оформление заказа продолжится в телеграм-боте! <br />
              Спасибо, что пользуетесь нашим сервисом!
            </p>
            <a
              href={`https://t.me/${internalName}?start=item_${window.item_id}`}
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
