import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { LayoutGeneral } from '@/components/Layout'
import { TelegramIcon } from '@/components/Ui'

export default function Page() {
  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">
                  Вход или регистрация
                </div>
                <div className="block-form__el form-el">
                  <div className="form-el__title">Электронная почта</div>
                  <input className="form-el__inp inp-def" type="text" value="kuzya990@mail.ru" />
                </div>
                <button className="block-form__btn btn-def btn-def_full btn-def_min">
                  <span>Продолжить</span>
                </button>
                <div className="block-form__line">
                  <span>Или</span>
                </div>
                <button className="block-form__social btn-telegram">
                  <div className="btn-telegram__icon">
                    <TelegramIcon />
                  </div>
                  <span>Войти через Телеграм</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
