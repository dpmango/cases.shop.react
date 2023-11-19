import cns from 'classnames'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'

import { LayoutGeneral } from '@/components/Layout'
import { Close2Icon, SettingsIcon, StarButtonIcon } from '@/components/Ui'
import { getFavouritesCategories, getMainPage } from '@/core/api'
import { useClickOutside } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)
  const accessToken = context.req.cookies['access_token']

  const promisesToBeFetched = [
    { name: 'favouriteCategories', resolver: getFavouritesCategories(accessToken) },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, favouriteCategories } = await Resolver(promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
      favouriteCategories,
      shopId,
    },
  }
}) satisfies GetServerSideProps<Partial<IResolver>>

export default function Page({
  favouriteCategories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [settingsOpened, setSettingsOpened] = useState(true)

  const sidebarRef = useRef<HTMLDivElement | null>(null)
  // useClickOutside(sidebarRef, () => setSettingsOpened(false))

  return (
    <LayoutGeneral>
      <Head>
        <title>Уведомления</title>
      </Head>

      <div className="padding-top"></div>
      <section className={cns('sec-page sec-notify', settingsOpened && 'active')}>
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Уведомления</div>
              <button
                className="action-btn btn-notify sec-notify__mob"
                onClick={() => setSettingsOpened(!settingsOpened)}
              >
                <div className="action-btn__content">
                  <SettingsIcon />
                </div>
              </button>
            </div>
            <div className="sec-page__content">
              <div className="sec-page__body">
                <div className="products-2-el products-2-el_2 products-2-el_m">
                  {/* <img className="products-2-el__img" src="../img/bg/4.jpg" alt="" /> */}
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
              </div>
              <div
                className={cns(
                  'sec-page__sidebar sidebar-subscriptions',
                  settingsOpened && 'active',
                )}
                style={{ display: settingsOpened ? 'block' : 'none' }}
                ref={sidebarRef}
              >
                <div className="sidebar-subscriptions__title title-def title-def_sec3">
                  Ваши подписки
                </div>
                {favouriteCategories?.map((cat, idx) => (
                  <div className="sidebar-subscriptions__el subscriptions-el" key={idx}>
                    {cat.icon && <img className="subscriptions-el__img" src={cat.icon} alt="" />}
                    <div className="subscriptions-el__title">{cat.name}</div>
                    <div className="close-btn close-btn_small subscriptions-el__close">
                      <Close2Icon />
                    </div>
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
