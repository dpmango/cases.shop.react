import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import { HomeFaq, HomeNavigation, HomePopular, HomeProcess, HomeReviews } from '@/components/Home'
import { LayoutGeneral } from '@/components/Layout'
import { ProductCard, ReviewCard } from '@/components/Product'
import { getPopularProducts, getReviews, getWhois } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'popular',
      resolver: getPopularProducts({ limit: 8, offset: 0 }),
    },
    {
      name: 'reviews',
      resolver: getReviews({ limit: 9, offset: 0 }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, popularData, homepageData } = await Resolver(
    promisesToBeFetched,
    context,
  )

  return {
    props: {
      PRELOADED_STATE,
      homepageData,
      popularData,
      shopId,
    },
  }
}) satisfies GetServerSideProps<Partial<IResolver>>

export default function Home({
  PRELOADED_STATE,
  homepageData,
  popularData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <LayoutGeneral>
      <Head>
        <title>Главная</title>
      </Head>

      <img className="home-bg" src="/img/home-bg.jpg" alt="" />
      <img className="home-bg-2" src="/img/home-bg-2.jpg" alt="" />

      {homepageData?.tutorial && <HomeProcess tutorial={homepageData.tutorial} />}
      {homepageData?.categories && <HomeNavigation categories={homepageData.categories} />}
      {popularData && <HomePopular products={popularData} />}

      <HomeReviews />
      <HomeFaq faq={homepageData?.faq} />
    </LayoutGeneral>
  )
}
