import { SvgIcon } from '@c/Ui'
import React, { useEffect, useState } from 'react'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { getOrders } from '@/core/api/session.api'
import { IProfileDto } from '@/core/interface/Initialization'

const Header = () => {
  const [purchasesList, setPurchasesList] = useState<string[]>([])

  const {
    id: shopId,
    settings,
    user,
    bot_connector_name,
    lastPurchases,
  } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  const setProfile = (data: IProfileDto) => {
    dispatch(updateAnyState({ key: 'user', data }))
  }

  useEffect(() => {
    if (lastPurchases === null && shopId) {
      const fetchData = async () => {
        const { data } = await getOrders({ shopId })
        if (data) {
          dispatch(updateAnyState({ key: 'lastPurchases', data }))
        }
      }
      fetchData()
    }
  }, [shopId])

  useEffect(() => {
    if (lastPurchases !== null) {
      if (lastPurchases.length < 7) {
        const newPurchases = [] as string[]

        for (let i = 0; i < 7; i++) {
          newPurchases.push(lastPurchases[i] ?? '')
        }

        setPurchasesList(newPurchases)
      } else {
        setPurchasesList(lastPurchases)
      }
    }
  }, [lastPurchases])

  const { onAuthSuccess } = useTelegramAuth({ shopId, cb: (data) => setProfile(data) })

  return (
    <header
      className="header"
      style={{
        background: settings.header_color,
      }}
    >
      <div className="container _full">
        <div className="header__box">
          {lastPurchases && purchasesList && (
            <div className="header__info">
              <div className="header__content">
                <a href="#" className="header__link">
                  <SvgIcon name="star" />
                </a>
                <a href="#" className="header__link">
                  <SvgIcon name="menu" />
                </a>
              </div>

              <div className="header__boxes">
                {purchasesList?.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: `url(${item}) no-repeat center center / cover`,
                      visibility: item ? 'visible' : 'hidden',
                    }}
                    className="header__block"
                  ></div>
                ))}
              </div>
            </div>
          )}
          {user ? (
            <div className="header__add ">
              <a
                className="header__log "
                onClick={() => {
                  dispatch(setModal({ name: 'deposit' }))
                }}
              >
                <div className="header__cash">
                  <SvgIcon name="wallet" />
                </div>
                <div className="header__plus">
                  <SvgIcon name="plus" />
                </div>
              </a>
              <div className="header__right">
                <p className="header__name">@{user.userName}</p>
                <p className="header__sum">{user.balance}P</p>
              </div>
            </div>
          ) : (
            <a className="header__telegram">
              <TLoginButton
                botName={bot_connector_name}
                buttonSize={TLoginButtonSize.Large}
                lang="ru"
                usePic={false}
                cornerRadius={20}
                onAuthCallback={onAuthSuccess}
                requestAccess={'write'}
              />
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
