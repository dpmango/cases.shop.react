import { LayoutGeneral } from '@/components/Layout'
import { SuccessIcon } from '@/components/Ui'

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
                  Восстановление пароля
                </div>
                <div className="block-form__el form-el">
                  <div className="form-el__title">Придумайте новый пароль</div>
                  <input className="form-el__inp inp-def" type="password" value="***************" />
                  <div className="form-el__textbottom text-cat text-cat_small">
                    Минимум 5 символов
                  </div>
                </div>
                <button className="block-form__btn btn-def btn-def_full btn-def_min">
                  <span>Войти</span>
                </button>
              </div>

              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">Подтверждение</div>
                <div className="block-form__text text-cat">
                  На вашу электронную почту отправлено письмо со ссылкой для восстановления пароля.
                  Перейдите по ней чтобы продолжить процесс восстановления.
                </div>
                <div className="title-def title-def_m title-def_small">Письмо так и не пришло?</div>
                <div className="countdown mb-2">
                  <span>
                    Отправить ещё раз через <span className="countdown__time"> 5:43</span>
                  </span>
                </div>
                <button className="btn-def btn-def_full btn-def_min">
                  <span>Написать в поддержку</span>
                </button>
              </div>

              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">
                  Восстановление пароля
                </div>
                <div className="form-info block-form__info">
                  <SuccessIcon />
                  <div className="form-info__body">
                    <div className="form-info__text text-cat">
                      Вы успешно изменили пароль для своего аккаунта. Теперь можете продолжить
                      совершать покупки.
                    </div>
                  </div>
                </div>
                <a className="block-form__btn btn-def btn-def_full btn-def_min" href="#">
                  <span>На главную</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
