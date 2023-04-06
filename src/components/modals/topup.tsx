import React, { useEffect, useState } from 'react'

import Close from '@/assets/img/close.png'
import Personal2 from '@/assets/img/personal2.png'
import Popup from '@/assets/img/popup.png'

let amount = 0

const TopupModal = () => {
  const generateLink = async () => {
    const { data } = await getPayment({ amount })

    if (data) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style = 'display: none'
      a.href = data.payment_link
      a.target = '_blank'
      a.click()
      document.body.removeChild(a)
    }
  }

  useEffect(() => {
    // prevent default for .popup__form
    document.querySelector('.popup__form').addEventListener('submit', (e) => {
      e.preventDefault()

      generateLink()
    })

    document.querySelector('.popup__input').addEventListener('input', (e) => {
      amount = +e.target.value
    })
  }, [])

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
            <form className="popup__form">
              <input
                type="number"
                className="popup__input"
                name="sum"
                min={100}
                placeholder="Введите сумму"
                value={amount}
                max={99999}
              />
              <button className="popup__btn bttn">Пополнить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopupModal
