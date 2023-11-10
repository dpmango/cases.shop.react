import cns from 'classnames'
import { setCookie } from 'cookies-next'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useRef, useState } from 'react'

import { BackIcon, NotificationIcon } from '@/components/Ui'
import { toggleFavourite } from '@/core/api'
import { useClickOutside } from '@/core/hooks'
import { useAppSelector } from '@/core/store'

interface ICategoryNotification {
  id: string
  favourite: boolean
}

export const CategoryNotification: React.FC<ICategoryNotification> = ({ id, favourite }) => {
  const [isFavourted, setIsFavourted] = useState(favourite || false)
  const [favouritePending, setFavouritePending] = useState(false)
  const [notifyDropdown, setNotifyDropdown] = useState(false)

  const { user } = useAppSelector((store) => store.sessionState)

  const router = useRouter()

  const notifyDropdownRef = useRef(null)
  useClickOutside(notifyDropdownRef, () => setNotifyDropdown(false))

  const toggleNotifications = async () => {
    if (!user) {
      setCookie('lastRoute', router.asPath)
      router.replace('/auth')
    } else {
      if (favouritePending) return
      const action = isFavourted ? 'remove' : 'add'

      setFavouritePending(true)
      setIsFavourted(action === 'add')

      const { data, error } = await toggleFavourite({
        action,
        type: 'category',
        id: id,
      })

      if (error) {
        setIsFavourted(action !== 'add')
      }

      setFavouritePending(false)
    }
  }

  return (
    <div className="sec-header-cat__top-right">
      <div
        className={cns('action-btn', notifyDropdown && 'active', isFavourted && 'action-btn_red')}
        ref={notifyDropdownRef}
      >
        <button className="action-btn__content" onClick={() => setNotifyDropdown(!notifyDropdown)}>
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
              <div className="action-btn__dropdown-title">Уведомления о новых товарах</div>
              <div className="text-cat text-cat_small">
                Мы будем присылать вам уведомление как только появятся новые товары в категории
                Fortnite.
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
                  onClick={toggleNotifications}
                >
                  {isFavourted ? 'Выключить' : 'Включить'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
