import type { GetServerSideProps } from 'next'
import Link from 'next/link'

import { LayoutGeneral } from '@/components/Layout'
import { SuccessIcon } from '@/components/Ui'
import { getMainPage, initializeApp } from '@/core/api'
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
    {
      name: 'homepage',
      resolver: getMainPage({ shopId }),
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
                <Link className="block-form__btn btn-def btn-def_full btn-def_min" href="/">
                  <span>На главную</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
