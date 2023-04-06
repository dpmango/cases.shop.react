import React from 'react'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'
import { useRecoilState, useRecoilValue } from 'recoil'

import Close from '@/assets/img/close.png'
import Personal from '@/assets/img/personal.png'
import { getShopId, getUser } from '@/core/storage/selectors/main'

const LoginModal = () => {
  const shopId = useRecoilValue(getShopId)
  const [, setProfile] = useRecoilState(getUser)

  const { onAuthSuccess } = useTelegramAuth({ shopId, cb: (data) => setProfile(data) })

  return (
    <div
      style={{
        display: 'none',
      }}
    >
      <div className="box-modal" id="a1">
        <div className="popup">
          <div className="popup-call__box">
            <div className="box-modal__close articmodal-close">
              <img src={Close} alt="" className="close__pic svg" />
            </div>
            <div className="popup__flex d-flex">
              <img src={Personal} alt="" />
              <p>АВТОРИЗАЦИЯ</p>
            </div>
            <p className="popup__text">
              Авторизируйся, чтобы не потеряться <br />
              при совершении заказа
            </p>
            <TLoginButton
              botName="zartoga_best_dev_bot"
              buttonSize={TLoginButtonSize.Large}
              lang="ru"
              usePic={false}
              cornerRadius={20}
              onAuthCallback={onAuthSuccess}
              requestAccess={'write'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
