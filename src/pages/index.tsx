import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { HomeFaq, HomeNavigation, HomeProcess, HomeReviews } from '@/components/Home'
import { LayoutGeneral } from '@/components/Layout'
import { ProductCard, ReviewCard } from '@/components/Product'
import { getMainPage, getReviews, initializeApp } from '@/core/api'
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
    // {
    //   name: 'popular',
    //   resolver: getPopularProducts({ shopId, limit: 8 + 1, offset: 0 }),
    // },
    {
      name: 'reviews',
      resolver: getReviews({ shopId, limit: 9, offset: 0 }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, popularData, homepageData } = await Resolver(shopId, promisesToBeFetched)

  return {
    props: {
      PRELOADED_STATE,
      homepageData,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Home({
  PRELOADED_STATE,
  homepageData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <LayoutGeneral>
      <img className="home-bg" src="/img/home-bg.jpg" alt="" />
      <img className="home-bg-2" src="/img/home-bg-2.jpg" alt="" />

      {homepageData?.tutorial && <HomeProcess tutorial={homepageData.tutorial} />}
      {homepageData?.categories && <HomeNavigation categories={homepageData.categories} />}

      <section className="sec-def">
        <div className="container-def">
          <div className="sec-def__wrap">
            <h2 className="title-def title-def_sec sec-def__title">Популярные товары</h2>
            <div className="sec-def__content">
              <div className="products products_limit">
                {homepageData?.popularItems &&
                  homepageData.popularItems.map((x, idx) => (
                    <div className="products__el" key={idx}>
                      <ProductCard {...x} />
                    </div>
                  ))}
              </div>
              <button className="sec-def__btn btn-show">Показать ещё</button>
            </div>
          </div>
        </div>
      </section>

      <HomeReviews reviews={PRELOADED_STATE.productState.reviews} />
      <HomeFaq faq={homepageData?.faq} />
    </LayoutGeneral>
  )
}