import type { GetServerSideProps } from 'next'

import { LayoutGeneral } from '@/components/Layout'
import { DarkThemeIcon, EmailPLusIcon, LightThemeIcon } from '@/components/Ui'
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

  const { PRELOADED_STATE } = await Resolver(shopId, promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Page() {
  return (
    <LayoutGeneral>
      <div className="sec-lk padding-top">
        <div className="container-def">
          <div className="sec-lk__wrap">
            <div className="sec-lk__content">
              <div className="sec-lk__titlemob title-mob">Временный профиль</div>
            </div>
          </div>
        </div>
        <div className="modal-info">
          <div className="container-def">
            <div className="modal-info__wrap">
              <div className="modal-info__content">
                <div className="modal-info__icon">
                  <EmailPLusIcon />
                </div>
                <div className="modal-info__body">
                  <div className="modal-info__title title-def title-def_med">
                    Необходимо указать и подтвердить электронную почту
                  </div>
                  <div className="modal-info__text text-info">
                    Ваш аккаунт является временным т. к. вы оформили заказ без входа в аккаунт.
                    Укажите и подтвердите электронную почту чтобы сделать постоянный аккаунт
                    и сохранять историю покупок. В противном случае этот аккаунт будет удален через
                    5 дней после узавершения заказа.
                  </div>
                  <div className="modal-info__btns">
                    <button className="modal-info__btn btn-def btn-def_small">
                      <span>Указать почту</span>
                    </button>
                    <button className="modal-info__btn btn-def btn-def_small btn-def_gray">
                      <span>Выйти навсегда</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="sec-lk__theme">
          <div className="container-def">
            <div className="title-cat">Тема</div>
            <div className="theme-btn">
              <button className="theme-btn__btn theme-btn__btn_black active">
                <DarkThemeIcon />
                <span>Тёмная</span>
              </button>
              <button className="theme-btn__btn theme-btn__btn_white">
                <LightThemeIcon />
                <span>Светлая</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </LayoutGeneral>
  )
}
