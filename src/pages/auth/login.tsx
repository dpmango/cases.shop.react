import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon } from '@/components/Ui'

export default function Page() {
  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">Вход с паролем</div>
                <div className="block-form__el form-el error">
                  <div className="form-el__title">Пароль</div>
                  <input className="form-el__inp inp-def" type="password" value="***************" />
                  <div className="form-el__message message-form message-form_error">
                    <div className="message-form__top">
                      <div className="message-form__title title-def title-def_small">
                        Неверный пароль
                      </div>
                      <div className="message-form__icon">
                        <InputWarningIcon />
                      </div>
                    </div>
                    <div className="message-form__text text-cat">
                      Попробуйте еще раз или воспользуйтесь функцией восстановления пароля.
                    </div>
                    <button className="message-form__btn btn-def btn-def_small btn-def_full btn-def_black">
                      <span>Восстановить пароль</span>
                    </button>
                  </div>
                </div>
                <button className="block-form__btn btn-def btn-def_full btn-def_min">
                  <span>Войти</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
