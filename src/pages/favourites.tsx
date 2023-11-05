import cns from 'classnames'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'

import { LayoutGeneral } from '@/components/Layout'
import { ProductCard } from '@/components/Product'
import { getFavourites, getMainPage } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)
  const accessToken = context.req.cookies['access_token']

  // Управление запросами страниц
  const promisesToBeFetched = [
    { name: 'favourites', resolver: getFavourites(accessToken) },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, userFavourites } = await Resolver(promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
      userFavourites,
      shopId,
    },
  }
}) satisfies GetServerSideProps<Partial<IResolver>>

export default function Page({
  userFavourites,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [activeCategory, setActiveCategory] = useState('Все')
  const hasData = userFavourites?.length

  const categoriesList = useMemo(() => {
    if (!hasData) return []

    const allStatuses = userFavourites?.reduce((acc, x) => {
      if (x.category?.name && !acc.includes(x.category.name)) {
        acc.push(x.category.name)
      }

      return acc
    }, [] as string[])

    return ['Все', ...allStatuses]
  }, [hasData, userFavourites])

  const displayList = useMemo(() => {
    if (!hasData) return []
    if (activeCategory === 'Все') return userFavourites

    return userFavourites.filter((x) => x.category?.name === activeCategory)
  }, [activeCategory, userFavourites, hasData])

  return (
    <LayoutGeneral>
      <Head>
        <title>Избранное</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-page">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__title title-def title-def_page">Избранное</div>
            <div className="tags tags_scroll">
              {categoriesList.length > 1 &&
                categoriesList.map((category, idx) => (
                  <button
                    className={cns('tags__el', activeCategory === category && 'active')}
                    onClick={() => setActiveCategory(category)}
                    key={idx}
                  >
                    <span>{category}</span>
                  </button>
                ))}
            </div>
            <div className="sec-page__content2">
              <div className="products">
                {displayList.map((product, idx) => (
                  <div className="products__el" key={idx}>
                    <ProductCard item={product.item} category={product.category} />
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
