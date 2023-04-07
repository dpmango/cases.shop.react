import React, { useEffect, useState } from 'react'

import Close from '@/assets/img/close.png'
import Personal2 from '@/assets/img/personal2.png'
import Popup from '@/assets/img/popup.png'

const DepositModal = () => {
  const [amount, setAmount] = useState(0)

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

  return (
    <div
      style={{
        display: 'none',
      }}
    >
      <div className="box-modal" id="a4">
        <div className="popup">
          <div className="popup-call__box">
            <div className="box-modal__close articmodal-close">
              <img src={Close} alt="" className="close__pic svg" />
            </div>
            <div className="popup__flex d-flex">
              <img src={Personal2} alt="" />
              <p>ПОПОЛНЕНИЕ БАЛАНСА</p>
            </div>
            <div className="popup__block">
              <img src={Popup} alt="" className="popup__pic" />
            </div>
            <form className="popup__form" onSubmit={generateLink}>
              <input
                type="number"
                className="popup__input"
                name="sum"
                min={100}
                placeholder="Введите сумму"
                value={amount}
                max={99999}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="popup__wrap">
                <div className="checkboxes-and-radios">
                  <div className="profile__item">
                    <div className="profile__one d-flex">
                      <input type="radio" name="radio-c" id="radio-1" value="1" />
                      <label htmlFor="radio-1">
                        <img src="@/assets/img/pay11.png" alt="" />
                      </label>
                      <input type="radio" name="radio-c" id="radio-2" value="2" />
                      <label htmlFor="radio-2">
                        <img src="@/assets/img/pay22.png" alt="" />
                      </label>
                      <input type="radio" name="radio-c" id="radio-3" value="3" checked />
                      <label htmlFor="radio-3">
                        <img src="@/assets/img/pay33.png" alt="" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="popup__btn bttn">
                Пополнить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepositModal
