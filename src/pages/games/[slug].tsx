import cns from 'classnames'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { LayoutGeneral } from '@/components/Layout'
import { BackIcon, NotificationIcon, StarButtonIcon } from '@/components/Ui'
import { getCategory, getMainPage, initializeApp } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'

export const getServerSideProps = (async (context) => {
  const { shopId, parsedSiteHost } = await DomainResolver(context)
  const pageSlug = context.params?.slug as string

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
    {
      name: 'category',
      resolver: getCategory({ shopId, id: pageSlug }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, categoryData } = await Resolver(shopId, promisesToBeFetched)

  return {
    props: {
      PRELOADED_STATE,
      categoryData,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function CategoryPage({
  PRELOADED_STATE,
  categoryData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log({ PRELOADED_STATE }, { categoryData })

  const [activeTab, setActiveTab] = useState(categoryData?.categories[0].id)
  const [notifyDropdown, setNotifyDropdown] = useState(false)
  const router = useRouter()

  const enableNotifications = useCallback(() => {
    router.push('/auth')
  }, [])

  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-header-cat">
        <img className="sec-header-cat__bg" src="../img/bg-cat.jpg" alt="" />
        <div className="container-def">
          <div className="sec-header-cat__wrap">
            <div className="sec-header-cat__top">
              <div className="sec-header-cat__top-left">
                <Link className="sec-header-cat__prev action-btn" href="/">
                  <div className="action-btn__content">
                    <BackIcon />
                  </div>
                </Link>
                <div className="cat-name">
                  {categoryData?.icon && (
                    <img
                      className="cat-name__img"
                      src={categoryData?.icon}
                      alt={categoryData.name}
                    />
                  )}
                  <div className="cat-name__body">
                    <div className="cat-name__title">{categoryData?.name}</div>
                  </div>
                </div>
              </div>
              <div className="sec-header-cat__top-title title-cat">Игры</div>
              <div className="sec-header-cat__top-right">
                <div className={cns('action-btn', notifyDropdown && 'active')}>
                  <button
                    className="action-btn__content"
                    onClick={() => setNotifyDropdown(!notifyDropdown)}
                  >
                    <div className="action-btn__icon">
                      <NotificationIcon />
                    </div>
                  </button>
                  <div
                    className="action-btn__dropdown action-btn__dropdown_2"
                    style={{ display: notifyDropdown ? 'block' : 'none' }}
                  >
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
                          <button
                            className="wrap-btns__btn btn-def btn-def_small btn-def_gray action-btn__dropdown-close"
                            onClick={() => setNotifyDropdown(false)}
                          >
                            Отмена
                          </button>
                          <button
                            className="wrap-btns__btn btn-def btn-def_small"
                            onClick={enableNotifications}
                          >
                            Включить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-header-cat__mob">
              <div className="cat-name">
                {categoryData?.icon && (
                  <img className="cat-name__img" src={categoryData?.icon} alt={categoryData.name} />
                )}
                <div className="cat-name__body">
                  <div className="cat-name__title">Fortnite</div>
                </div>
              </div>
            </div>
            <div className="sec-header-cat__content">
              <ul className="sec-header-cat__links links-cat">
                {categoryData?.categories.map((x) => (
                  <li className={cns('links-cat__el', activeTab === x.id && 'active')} key={x.id}>
                    <a className="links-cat__link" href="#">
                      {/* links-cat__link_bg */}
                      {x.name}
                    </a>
                  </li>
                ))}
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
                    <button className="tags__el active">
                      {/* <div className="tags__point"></div> */}
                      <span>1 000</span>
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
