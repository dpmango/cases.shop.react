import cns from 'classnames'
import debounce from 'lodash/debounce'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { LayoutGeneral } from '@/components/Layout'
import { ProductCardNotification } from '@/components/Product'
import { Close2Icon, SettingsIcon, StarButtonIcon } from '@/components/Ui'
import {
  getFavouritesCategories,
  getNotifications,
  markNotificationSeen,
  toggleFavourite,
} from '@/core/api'
import { useClickOutside } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch } from '@/core/store'
import { removeUserNotifications } from '@/core/store/session.store'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)
  const accessToken = context.req.cookies['access_token']

  const promisesToBeFetched = [
    { name: 'notifications', resolver: getNotifications(accessToken) },
    { name: 'favouriteCategories', resolver: getFavouritesCategories(accessToken) },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE, notifications, favouriteCategories } = await Resolver(
    promisesToBeFetched,
    context,
  )

  return {
    props: {
      PRELOADED_STATE,
      notifications,
      favouriteCategories,
      shopId,
    },
  }
}) satisfies GetServerSideProps<Partial<IResolver>>

export default function Page({
  favouriteCategories,
  notifications,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [settingsOpened, setSettingsOpened] = useState(false)
  const [userRemovedCategories, setUserRemovedCategories] = useState<string[]>([])
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  useClickOutside(sidebarRef, () => setSettingsOpened(false))
  const [markReadDone, setMarkReadDone] = useState<string[]>([])

  const dispatch = useAppDispatch()

  const displayCategories = useMemo(() => {
    if (!favouriteCategories) return []

    if (userRemovedCategories.length) {
      return favouriteCategories.filter((x) => !userRemovedCategories.includes(x.id))
    }
    return favouriteCategories
  }, [favouriteCategories, userRemovedCategories])

  const handleRemoveFav = async (id: string) => {
    const { data, error } = await toggleFavourite({
      action: 'remove',
      type: 'category',
      id,
    })

    if (data) {
      setUserRemovedCategories((prev) => [...prev, id])
    } else if (error) {
      toast.error('Ошибка, попробуйте снова')
    }
  }

  // просмотренные
  const markSeenItems = debounce(async () => {
    const unseenNotificationsIds = notifications?.filter((x) => !x.seen).map((x) => x.id)

    const domNotifications = document.querySelectorAll('.products-2-el')

    let markReadIds = [] as string[]
    const HEADER_HEIGHT = document.querySelector('header')?.clientHeight || 90
    Array.from(domNotifications).forEach((element, idx) => {
      const id = element.getAttribute('data-notification-id') || ''
      if (!unseenNotificationsIds?.includes(id)) return

      // in viewport
      const elBbox = element.getBoundingClientRect()

      const topVisible = elBbox.top + elBbox.height / 2 <= window.innerHeight - HEADER_HEIGHT
      const bottomVisible = elBbox.bottom >= HEADER_HEIGHT

      const isInViewportOrPast = topVisible && bottomVisible

      if (isInViewportOrPast) {
        markReadIds.push(id)
      }
    })

    if (markReadIds.length) {
      markReadIds = markReadIds.filter((id) => !markReadDone.includes(id))

      const { data, error } = await markNotificationSeen({ ids: markReadIds })

      if (!error) {
        setMarkReadDone((prev) => [...prev, ...markReadIds])
        dispatch(removeUserNotifications(markReadIds.length))
      }
    }
  }, 300)

  useEffect(() => {
    markSeenItems()

    window.addEventListener('scroll', markSeenItems, false)

    return () => {
      window.removeEventListener('scroll', markSeenItems, false)
    }
  }, [])

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
                className={cns(
                  'action-btn btn-notify sec-notify__mob',
                  settingsOpened && 'action-btn_red',
                )}
                onClick={() => setSettingsOpened(!settingsOpened)}
              >
                <div className="action-btn__content">
                  <SettingsIcon />
                </div>
              </button>
            </div>
            <div className="sec-page__content">
              <div className="sec-page__body">
                {notifications?.map((notification, idx) => (
                  <ProductCardNotification key={idx} {...notification} />
                ))}
              </div>
              <div
                className={cns(
                  'sec-page__sidebar sidebar-subscriptions',
                  settingsOpened && 'active',
                )}
                style={{ display: settingsOpened ? 'block' : '' }}
                ref={sidebarRef}
              >
                <div className="sidebar-subscriptions__title title-def title-def_sec3">
                  Ваши подписки
                </div>
                {displayCategories.map((cat, idx) => (
                  <div className="sidebar-subscriptions__el subscriptions-el" key={idx}>
                    {cat.icon && <img className="subscriptions-el__img" src={cat.icon} alt="" />}
                    <div className="subscriptions-el__title">{cat.name}</div>
                    <div
                      className="close-btn close-btn_small subscriptions-el__close"
                      onClick={() => handleRemoveFav(cat.id)}
                    >
                      <Close2Icon />
                    </div>
                  </div>
                ))}

                {displayCategories.length === 0 && (
                  <div className="">
                    <p className="text-info">
                      У вас нет активных подписок. Включить уведомления можно на странице категорий
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
