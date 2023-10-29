import cns from 'classnames'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useRef, useState } from 'react'

import { LayoutGeneral } from '@/components/Layout'
import { ProductCardLarge, ProductCoinCard } from '@/components/Product'
import { BackIcon, NotificationIcon, StarButtonIcon } from '@/components/Ui'
import { getCategory, getMainPage } from '@/core/api'
import { useClickOutside } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { formatPrice } from '@/core/utils'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)
  const pageSlug = context.params?.slug as string

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'category',
      resolver: getCategory({ id: pageSlug }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, categoryData } = await Resolver(promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
      categoryData,
      shopId,
    },
  }
}) satisfies GetServerSideProps<Partial<IResolver>>

export default function CategoryPage({
  PRELOADED_STATE,
  categoryData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log({ PRELOADED_STATE }, { categoryData })

  const [activeTab, setActiveTab] = useState(categoryData?.categories[0].id)
  const [notifyDropdown, setNotifyDropdown] = useState(false)

  const router = useRouter()

  const notifyDropdownRef = useRef(null)
  useClickOutside(notifyDropdownRef, () => setNotifyDropdown(false))

  const displayCategory = useMemo(() => {
    return categoryData?.categories.find((x) => x.id === activeTab)
  }, [categoryData?.categories, activeTab])

  const enableNotifications = useCallback(() => {
    router.replace('/auth')
  }, [])

  const coinProduct = categoryData?.categories.find((x) => x.id === 'FVBucks')

  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-header-cat">
        <img className="sec-header-cat__bg" src={categoryData?.icon || ''} alt="" />
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
                <div
                  className={cns('action-btn', notifyDropdown && 'active')}
                  ref={notifyDropdownRef}
                >
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
                    <a className="links-cat__link" onClick={() => setActiveTab(x.id)}>
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
            <ProductCoinCard coinsCategory={coinProduct} />

            <div className="sec-cat__content">
              <div className="products-2">
                {displayCategory?.items.map((product, idx) => (
                  <div className="products-2__el" key={idx}>
                    <ProductCardLarge {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
