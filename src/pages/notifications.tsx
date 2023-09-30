import type { GetServerSideProps } from 'next'

import { LayoutGeneral } from '@/components/Layout'
import { Close2Icon, SettingsIcon, StarButtonIcon } from '@/components/Ui'
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
      <section className="sec-page sec-notify">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Уведомления</div>
              <button className="action-btn btn-notify sec-notify__mob">
                <div className="action-btn__content">
                  <SettingsIcon />
                </div>
              </button>
            </div>
            <div className="sec-page__content">
              <div className="sec-page__body">
                <div className="products-2-el products-2-el_2 products-2-el_m">
                  <img className="products-2-el__img" src="../img/bg/4.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__tag tag">Новинка</div>
                      <div className="products-2-el__cat cat-info cat-info_big">
                        <img className="cat-info__icon" src="../img/cat/Heartstone.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">Heartstone</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      1 500 рунических камней
                    </div>
                    <div className="products-2-el__text text-cat">
                      Рунические камни — виртуальная валюта Hearthstone. Нужна для покупки
                      комплектов, пакетов, декоративных предметов, сезонных пропусков для режима
                      «Поля сражений» и практически любых других товаров для Hearthstone.
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">1 424 ₽</div>
                      </div>
                      <div className="products-2-el__acts">
                        <button className="btn-def btn-def_br btn-def_small products-el__acts-el">
                          <span>Купить</span>
                        </button>
                        <button className="action-btn products-el__acts-el">
                          <div className="action-btn__content">
                            <div className="action-btn__icon">
                              <StarButtonIcon />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-2-el products-2-el_2">
                  <img className="products-2-el__img" src="../img/bg/5.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__tag tag">Новинка</div>
                      <div className="products-2-el__cat cat-info cat-info_big">
                        <img className="cat-info__icon" src="../img/cat/fortnite.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">Fortnite</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      Крюк Женщины-кошки
                    </div>
                    <div className="products-2-el__text text-cat">
                      Приобретая этот ключ — вы получаете предмет Крюк Женщины-кошки «Замурчательное
                      приспособление», который необходимо использовать на официальном сайте
                      EpicGames
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">715 ₽</div>
                      </div>
                      <div className="products-2-el__acts">
                        <button className="btn-def btn-def_br btn-def_small products-el__acts-el">
                          <span>Купить</span>
                        </button>
                        <button className="action-btn products-el__acts-el">
                          <div className="action-btn__content">
                            <div className="action-btn__icon">
                              <StarButtonIcon />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-page__sidebar sidebar-subscriptions">
                <div className="sidebar-subscriptions__title title-def title-def_sec3">
                  Ваши подписки
                </div>
                <div className="sidebar-subscriptions__el subscriptions-el">
                  <img className="subscriptions-el__img" src="../img/cat/fortnite.svg" alt="" />
                  <div className="subscriptions-el__title">Fortnite</div>
                  <div className="close-btn close-btn_small subscriptions-el__close">
                    <Close2Icon />
                  </div>
                </div>
                <div className="sidebar-subscriptions__el subscriptions-el">
                  <img className="subscriptions-el__img" src="../img/cat/overwatch.svg" alt="" />
                  <div className="subscriptions-el__title">Overwatch 2</div>
                  <div className="close-btn close-btn_small subscriptions-el__close">
                    <Close2Icon />
                  </div>
                </div>
                <div className="sidebar-subscriptions__el subscriptions-el">
                  <img
                    className="subscriptions-el__img"
                    src="../img/cat/genshinimpact.svg"
                    alt=""
                  />
                  <div className="subscriptions-el__title">Genshin Impact</div>
                  <div className="close-btn close-btn_small subscriptions-el__close">
                    <Close2Icon />
                  </div>
                </div>
                <div className="sidebar-subscriptions__el subscriptions-el">
                  <img className="subscriptions-el__img" src="../img/cat/mine.png" alt="" />
                  <div className="subscriptions-el__title">Minecraft</div>
                  <div className="close-btn close-btn_small subscriptions-el__close">
                    <Close2Icon />
                  </div>
                </div>
                <div className="sidebar-subscriptions__el subscriptions-el">
                  <img className="subscriptions-el__img" src="../img/cat/steam.svg" alt="" />
                  <div className="subscriptions-el__title">Steam</div>
                  <div className="close-btn close-btn_small subscriptions-el__close">
                    <Close2Icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
