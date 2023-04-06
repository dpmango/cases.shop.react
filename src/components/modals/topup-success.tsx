import React from 'react'

import Close from '@/assets/img/close.png'
import Personal2 from '@/assets/img/personal2.png'

const TopupSuccessModal = () => {
  return (
    <div
      style={{
        display: 'none',
      }}
    >
      <div className="box-modal" id="a2">
        <div className="popup">
          <div className="popup-call__box">
            <div className="box-modal__close articmodal-close">
              <img src={Close} alt="" className="close__pic svg" />
            </div>
            <div className="popup__flex d-flex">
              <img src={Personal2} alt="" />
              <p>ПОПОЛНЕНИЕ БАЛАНСА</p>
            </div>
            <p className="popup__text">
              Ваш баланс пополнен успешно! <br />
              Дальнешее оформление заказа продолжится в чат-боте!
            </p>
            <a href="#" className="popup__btn bttn">
              {' '}
              Перейти в бот-чат{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopupSuccessModal
