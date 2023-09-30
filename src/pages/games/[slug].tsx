import type { GetServerSideProps } from 'next'

import { LayoutGeneral } from '@/components/Layout'
import { StarButtonIcon } from '@/components/Ui'
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

export default function CategoryPage() {
  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-header-cat">
        <img className="sec-header-cat__bg" src="../img/bg-cat.jpg" alt="" />
        <div className="container-def">
          <div className="sec-header-cat__wrap">
            <div className="sec-header-cat__top">
              <div className="sec-header-cat__top-left">
                <a className="sec-header-cat__prev action-btn" href="#">
                  <div className="action-btn__content">
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.9585 17L0.986158 9L8.9585 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
                <div className="cat-name">
                  <img className="cat-name__img" src="../img/cat/fortnite.svg" alt="" />
                  <div className="cat-name__body">
                    <div className="cat-name__title">Fortnite</div>
                  </div>
                </div>
              </div>
              <div className="sec-header-cat__top-title title-cat">Игры</div>
              <div className="sec-header-cat__top-right">
                <div className="action-btn">
                  <button className="action-btn__content">
                    <div className="action-btn__icon">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.19385 19.6665C8.45959 20.4665 9.16824 20.9998 9.96548 20.9998C10.7627 20.9998 11.4714 20.4665 11.7371 19.6665"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.96533 2.95556V1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.9655 2.95557C13.5973 2.95557 16.6091 5.97779 16.6091 9.62223C16.6091 15.8445 17.9378 17 17.9378 17H1.99316C1.99316 17 3.32189 15.3111 3.32189 9.62223C3.32189 5.97779 6.24508 2.95557 9.9655 2.95557Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <div className="action-btn__dropdown action-btn__dropdown_2">
                    <div className="action-btn__dropdown-content">
                      <div className="action-btn__dropdown-block">
                        <div className="action-btn__dropdown-title">
                          Уведомления о новых товарах
                        </div>
                        <div className="text-cat text-cat_small">
                          Мы будем присылать вам уведомление как только появятся новые товары
                          в категории Fortnite.
                        </div>
                        <div className="wrap-btns action-btn__btns">
                          <button className="wrap-btns__btn btn-def btn-def_small btn-def_gray action-btn__dropdown-close">
                            Отмена
                          </button>
                          <button className="wrap-btns__btn btn-def btn-def_small">Включить</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-header-cat__mob">
              <div className="cat-name">
                <img className="cat-name__img" src="../img/cat/fortnite.svg" alt="" />
                <div className="cat-name__body">
                  <div className="cat-name__title">Fortnite</div>
                </div>
              </div>
            </div>
            <div className="sec-header-cat__content">
              <ul className="sec-header-cat__links links-cat">
                <li className="links-cat__el active">
                  <a className="links-cat__link" href="#">
                    Популярное
                  </a>
                </li>
                <li className="links-cat__el">
                  <a className="links-cat__link" href="#">
                    Предметы
                  </a>
                </li>
                <li className="links-cat__el">
                  <a className="links-cat__link" href="#">
                    Подписки
                  </a>
                </li>
                <li className="links-cat__el">
                  <a className="links-cat__link" href="#">
                    Наборы
                  </a>
                </li>
                <li className="links-cat__el">
                  <a className="links-cat__link" href="#">
                    Задания
                  </a>
                </li>
                <li className="links-cat__el">
                  <a className="links-cat__link links-cat__link_bg" href="#">
                    Эксклюзивы
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-cat">
        <div className="container-def">
          <div className="sec-cat__wrap">
            <div className="sec-cat__top product-el-big">
              <img className="product-el-big__img" src="../img/bg/1.jpg" alt="" />
              <div className="product-el-big__content">
                <div className="product-el-big__title title-def title-def_sec">Валюта: В-баксы</div>
                <div className="product-el-big__text text-info">
                  В-баксы можно потратить в «Королевской битве» и творческом режиме, чтобы купить
                  экипировки, дельтапланы, кирки, эмоции, обёртки и боевой пропуск текущего сезона!
                  Дельтапланы и воздушные следы недоступны в режиме «Сражение с Бурей».
                </div>
                <div className="product-el-big__tags">
                  <div className="title-small title-small_m">Количество В-баксов</div>
                  <div className="tags tags_2">
                    <button className="tags__el">
                      <div className="tags__point"></div>
                      <span>1 000</span>
                    </button>
                    <button className="tags__el">
                      <span>2 800</span>
                    </button>
                    <button className="tags__el active">
                      <div className="tags__point"></div>
                      <span>5 000</span>
                    </button>
                    <button className="tags__el">
                      <span>13 500</span>
                    </button>
                  </div>
                </div>
                <div className="product-el-big__choose">
                  <div className="title-small title-small_m">Способ получения</div>
                  <div className="choose">
                    <div className="choose__el">
                      <div className="choose-el active">
                        <div className="choose-el__top">
                          <div className="choose-el__title title-small">Покупка на аккаунт</div>
                          <div className="choose-el__icon">%</div>
                        </div>
                        <div className="choose-el__text text-cat text-cat_small">
                          Мы купим товар зайдя в ваш аккаунт
                        </div>
                      </div>
                    </div>
                    <div className="choose__el">
                      <div className="choose-el">
                        <div className="choose-el__top">
                          <div className="choose-el__title title-small">Ключ</div>
                          <div className="choose-el__icon">%</div>
                        </div>
                        <div className="choose-el__text text-cat text-cat_small">
                          Ключ активации придёт на электронную почту
                        </div>
                      </div>
                    </div>
                    <div className="choose__el">
                      <div className="choose-el">
                        <div className="choose-el__top">
                          <div className="choose-el__title title-small">Ключ Nintendo</div>
                          <div className="choose-el__icon">%</div>
                        </div>
                        <div className="choose-el__text text-cat text-cat_small">
                          Ключ активации придёт на электронную почту
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-el-big__bottom">
                  <div className="product-el-big__cost pr-cost pr-cost_big">
                    <div className="pr-cost__new">249 ₽</div>
                    <div className="pr-cost__old">299 ₽</div>
                  </div>
                  <div className="product-el-big__acts">
                    <button className="btn-def btn-def_br btn-def_small products-el__acts-el">
                      <span>В корзину</span>
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
            <div className="sec-cat__content">
              <div className="products-2">
                <div className="products-2__el">
                  <div className="products-2-el">
                    <img className="products-2-el__img" src="../img/bg/2.jpg" alt="" />
                    <div className="products-2-el__content">
                      <div className="products-2-el__title title-def title-def_sec2">
                        Подписка: Отряд Fortnite
                      </div>
                      <div className="products-2-el__text text-cat">
                        «Отряд Fortnite» — это ежемесячная подписка. За текущий месяц вы получите
                        1000 В-баксов и игровые предметы, а также полный доступ к боевому пропуску.
                        Подписка действует 30 дней с момента выполнения заказа, без автопродления.
                      </div>
                      <div className="products-2-el__bottom">
                        <div className="products-2-el__cost pr-cost pr-cost_big">
                          <div className="pr-cost__val">749 ₽</div>
                        </div>
                        <div className="products-2-el__acts">
                          <button className="btn-def btn-def_br btn-def_small products-el__acts-el">
                            <span>В корзину</span>
                          </button>
                          <button className="action-btn action-btn_red products-el__acts-el">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
