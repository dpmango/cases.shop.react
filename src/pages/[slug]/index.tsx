import cns from 'classnames'
import { deleteCookie } from 'cookies-next'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { LayoutGeneral } from '@/components/Layout'
import { CategoryNotification, ProductCardLarge, ProductCoinCard } from '@/components/Product'
import { BackIcon, NotificationIcon, StarButtonIcon } from '@/components/Ui'
import { getCategory, getMainPage } from '@/core/api'
import { useClickOutside } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { formatPrice } from '@/core/utils'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)
  const pageSlug = context.params?.slug as string

  if (pageSlug === 'favicon.ico') {
    return {
      props: {},
    }
  }

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'category',
      resolver: getCategory({ id: pageSlug }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, categoryData } = await Resolver(promisesToBeFetched, context)

  if (!categoryData) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

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
  const coinCategoryID = 'FVBucks'

  const [activeTab, setActiveTab] = useState(categoryData?.categories[0].id)

  const router = useRouter()

  const displayCategory = useMemo(() => {
    return categoryData?.categories.find((x) => x.id === activeTab)
  }, [categoryData?.categories, activeTab])

  const coinProduct = categoryData?.categories.find((x) => x.id === coinCategoryID)
  const showCoinProduct = activeTab === coinCategoryID && coinProduct

  useEffect(() => {
    deleteCookie('lastRoute')
  }, [])

  if (!categoryData) return

  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-header-cat">
        <img className="sec-header-cat__bg" src={categoryData.icon || ''} alt="" />
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
                  {categoryData.icon && (
                    <img
                      className="cat-name__img"
                      src={categoryData.icon}
                      alt={categoryData.name}
                    />
                  )}
                  <div className="cat-name__body">
                    <div className="cat-name__title">{categoryData.name}</div>
                  </div>
                </div>
              </div>
              <div className="sec-header-cat__top-title title-cat">Игры</div>
              <CategoryNotification id={categoryData.id} />
            </div>
            <div className="sec-header-cat__mob">
              <div className="cat-name">
                {categoryData.icon && (
                  <img className="cat-name__img" src={categoryData.icon} alt={categoryData.name} />
                )}
                <div className="cat-name__body">
                  <div className="cat-name__title">Fortnite</div>
                </div>
              </div>
            </div>
            <div className="sec-header-cat__content">
              <ul className="sec-header-cat__links links-cat">
                {categoryData.categories.map((x) => (
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
            {showCoinProduct && <ProductCoinCard coinsCategory={coinProduct} />}

            <div className="sec-cat__content">
              <div className="products-2">
                {displayCategory?.items.map((product, idx) => (
                  <div className="products-2__el" key={idx}>
                    <ProductCardLarge {...product} category={displayCategory} />
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
