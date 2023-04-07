import { SvgIcon } from '@c/Ui'
import React from 'react'

const DepositSuccessModal = () => {
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
              <SvgIcon name="close" />
              {/* <img src={Close} alt="" className="close__pic svg" /> */}
            </div>
            <div className="popup__flex d-flex">
              <img src="@/assets/img/personal2.png" alt="" />
              <p>ПОПОЛНЕНИЕ БАЛАНСА</p>
            </div>
            <p className="popup__text">
              Ваш баланс пополнен успешно! <br />
              Дальнешее оформление заказа продолжится в чат-боте!
            </p>
            <a href="#" className="popup__btn bttn">
              Перейти в бот-чат
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepositSuccessModal
