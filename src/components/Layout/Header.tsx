import React, { useEffect, useState } from 'react'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import Icon1 from '@/assets/img/icon1.png'
import Plus from '@/assets/img/plus.png'
import { getPurchases } from '@/core/api/session.api'
import { IProfileDto } from '@/core/interface/Initialization'

const Header = () => {
  const [purchasesList, setPurchasesList] = useState<string[]>([])

  const {
    id: shopId,
    settings,
    user,
    internal_name: internalName,
    lastPurchases,
  } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  const setProfile = (data: IProfileDto) => {
    dispatch(updateAnyState({ key: 'user', data }))
  }

  useEffect(() => {
    if (lastPurchases === null && shopId) {
      const fetchData = async () => {
        const { data } = await getPurchases({ shopId })
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
    <nav
      className="nav"
      id="nav"
      style={{
        background: `radial-gradient(78.79% 1603.12% at 18.89% 71.76%, ${settings.header_first_color} 0%, ${settings.header_second_color} 100%)`,
      }}
    >
      <div className="container">
        <div className="nav__box d-flex">
          {lastPurchases && purchasesList && (
            <div className="nav__info d-flex">
              <div className="nav__boxes d-flex">
                {purchasesList?.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: `url(${item}) no-repeat center center / cover`,
                      visibility: item ? 'block' : 'hidden',
                    }}
                    className="nav__block"
                  ></div>
                ))}
              </div>
            </div>
          )}

          {user ? (
            <div className="nav__add d-flex">
              <a
                className="nav__log d-flex"
                onClick={() => {
                  // @ts-ignore
                  // window.openModal('a4')
                }}
              >
                <div className="nav__cash">
                  <img src={Icon1} alt="" className="svg" />
                </div>
                <img src={Plus} alt="" className="nav__plus" />
              </a>
              <div className="nav__right">
                <p className="nav__name">@{user.userName}</p>
                <p className="nav__sum">{user.balance}P</p>
              </div>
            </div>
          ) : (
            <a className="nav__telegram">
              <TLoginButton
                botName={internalName}
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
    </nav>
  )
}

export default Header
