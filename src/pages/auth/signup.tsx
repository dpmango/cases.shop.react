import type { GetServerSideProps } from 'next'

import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon, SuccessIcon } from '@/components/Ui'
import { initializeApp } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'

export const getServerSideProps = (async (context) => {
  const { shopId, parsedSiteHost } = await DomainResolver(context)

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'init',
      resolver: initializeApp({ shopId, site: parsedSiteHost }),
      errorRouter: {
        fatal: true,
      },
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE } = await Resolver(shopId, promisesToBeFetched)

  return {
    props: {
      PRELOADED_STATE,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Page() {
  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">Регистрация</div>
                <div className="block-form__el form-el">
                  <div className="form-el__title">Придумайте пароль</div>
                  <input className="form-el__inp inp-def" type="password" value="***************" />
                  <div className="form-el__message message-form message-form_error">
                    <div className="message-form__top">
                      <div className="message-form__title title-def title-def_small">
                        Слишком короткий пароль
                      </div>
                      <div className="message-form__icon">
                        <InputWarningIcon />
                      </div>
                    </div>
                    <div className="message-form__text text-cat">
                      Ваш пароль должен содержать минимум 5 символов. Сейчас вы используете только
                      3.
                    </div>
                  </div>
                  <div className="form-el__textbottom text-cat text-cat_small">
                    Минимум 5 символов
                  </div>
                </div>
                <button className="block-form__btn btn-def btn-def_full btn-def_min">
                  <span>Продолжить</span>
                </button>
              </div>

              {/* success */}
              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">Регистрация</div>
                <div className="form-info block-form__info">
                  <SuccessIcon />
                  <div className="form-info__body">
                    <div className="form-info__text text-cat">
                      Вы успешно подтвердили свою электронную почту. Теперь можете совершать покупки
                      и пополнять баланс.
                    </div>
                  </div>
                </div>
                <a className="block-form__btn btn-def btn-def_full btn-def_min" href="#">
                  <span>На главную</span>
                </a>
              </div>

              {/* confrm */}
              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">Подтверждение</div>
                <div className="block-form__text text-cat">
                  На вашу электронную почту отправлено письмо со ссылкой для подтверждения
                  регистрации. Перейдите по ней чтобы завершить процесс регистрации.
                </div>
                <div className="title-def title-def_m title-def_small">Письмо так и не пришло?</div>
                <div className="countdown mb-2">
                  <span>
                    Отправить ещё раз через <span className="countdown__time"> 5:43</span>
                  </span>
                </div>
                <button className="btn-def btn-def_full btn-def_min mb-2">
                  <span>Написать в поддержку</span>
                </button>
                <button className="btn-def btn-def_full btn-def_min">
                  <span>Указать другую почту</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
