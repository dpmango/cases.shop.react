import cns from 'classnames'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'

import { LayoutGeneral } from '@/components/Layout'
import { OrderCard } from '@/components/Order'
import { Close3Icon, OrderCardDecorSvg } from '@/components/Ui'
import { getMainPage, getUserOrders } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)

  const accessToken = context.req.cookies['access_token']

  // Управление запросами страниц
  const promisesToBeFetched = [
    { name: 'orders', resolver: getUserOrders({ accessToken }) },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, userOrdersData } = await Resolver(promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
      shopId,
      userOrdersData,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Page({
  userOrdersData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [activeStatus, setActiveStatus] = useState('Все')
  const hasData = userOrdersData?.length

  const listStatuses = useMemo(() => {
    if (!hasData) return []

    const allStatuses = userOrdersData?.reduce((acc, x) => {
      if (!acc.includes(x.status.text)) {
        acc.push(x.status.text)
      }

      return acc
    }, [])

    return ['Все', ...allStatuses]
  }, [hasData, userOrdersData])

  const displayList = useMemo(() => {
    if (!hasData) return []
    if (activeStatus === 'Все') return userOrdersData

    return userOrdersData.filter((x) => x.status.text === activeStatus)
  }, [activeStatus, userOrdersData, hasData])

  return (
    <LayoutGeneral>
      <Head>
        <title>Заказы</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-page sec-orders">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__title title-def title-def_page">Мои заказы</div>
            <div className="tags tags_scroll">
              {listStatuses.length > 1 &&
                listStatuses.map((status, idx) => (
                  <button
                    className={cns('tags__el', activeStatus === status && 'active')}
                    onClick={() => setActiveStatus(status)}
                    key={idx}
                  >
                    <span>{status}</span>
                  </button>
                ))}
            </div>
            <div className="sec-page__content3">
              {hasData && (
                <div className="orders">
                  {displayList.map((order, idx) => (
                    <div className="orders__el" key={idx}>
                      <OrderCard {...order} />
                    </div>
                  ))}
                </div>
              )}

              {/* <button className="sec-orders__btn btn-show">Показать ещё</button>
              <div className="sec-orders__bottom">
                <div className="sec-orders__bottom-left">
                  <div className="nav-pages">
                    <a className="nav-pages__el active" href="#">
                      1
                    </a>
                    <a className="nav-pages__el" href="#">
                      2
                    </a>
                    <a className="nav-pages__el" href="#">
                      3
                    </a>
                    <a className="nav-pages__el" href="#">
                      4
                    </a>
                    <a className="nav-pages__el" href="#">
                      5
                    </a>
                  </div>
                </div>
                <div className="sec-orders__bottom-right">
                  <div className="sec-orders__bottom-text text-cat">
                    Показаны записи с 1 до 25 из 136
                  </div>
                </div>
              </div> */}

              {!hasData && <p className="text-info">У вас еще нет заказов</p>}
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
