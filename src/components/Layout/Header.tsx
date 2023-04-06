import React, { useEffect, useState } from 'react'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'
import { useRecoilState, useRecoilValue } from 'recoil'

import Icon1 from '@/assets/img/icon1.png'
import Plus from '@/assets/img/plus.png'
import { getPurchases } from '@/core/api/session.api'
import {
  getLastPurchases,
  getShopId,
  getShopInternalName,
  getShopSettings,
  getUser,
} from '@/core/storage/selectors/main'

const Header = () => {
  const shopId = useRecoilValue(getShopId)
  const settings = useRecoilValue(getShopSettings)

  const internalName = useRecoilValue(getShopInternalName)

  const [lastPurchases, setLastPurchases] = useRecoilState(getLastPurchases)
  const [profile, setProfile] = useRecoilState(getUser)

  const [purchasesList, setPurchasesList] = useState([])

  useEffect(() => {
    if (lastPurchases === null && shopId) {
      const fetchData = async () => {
        const { data } = await getPurchases({ shopId })
        if (data) {
          setLastPurchases(data)
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
        background: `radial-gradient(78.79% 1603.12% at 18.89% 71.76%, ${settings?.header_first_color} 0%, ${settings?.header_second_color} 100%)`,
      }}
    >
      <div className="container">
        <div className="nav__box d-flex">
          {lastPurchases ? (
            <div className="nav__info d-flex">
              <div className="nav__boxes d-flex">
                {purchasesList.map((item, index) => (
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
          ) : (
            ''
          )}
          {profile ? (
            <div className="nav__add d-flex">
              <a
                className="nav__log d-flex"
                onClick={() => {
                  window.openModal('a4')
                }}
              >
                <div className="nav__cash">
                  <img src={Icon1} alt="" className="svg" />
                </div>
                <img src={Plus} alt="" className="nav__plus" />
              </a>
              <div className="nav__right">
                <p className="nav__name">@{profile.userName}</p>
                <p className="nav__sum">{profile.balance}P</p>
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
