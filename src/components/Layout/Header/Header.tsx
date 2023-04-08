import cns from 'classnames'
import React, { useEffect, useState } from 'react'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { PurchasesSlider } from '@/components/Order'
import { SvgIcon } from '@/components/Ui'
import { IProfileDto } from '@/core/interface/Initialization'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const {
    id: shopId,
    settings,
    user,
    bot_connector_name,
  } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  const setProfile = (data: IProfileDto) => {
    dispatch(updateAnyState({ key: 'user', data }))
  }

  const { onAuthSuccess } = useTelegramAuth({ shopId, cb: (data) => setProfile(data) })

  // scroll functions
  const updateSticky = useCallback(() => {
    const startStickyAt = 0

    if (window.scrollY > startStickyAt) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [scrolled])

  useEventListener('scroll', updateSticky)
  // useEventListener('resize', updateSticky)

  return (
    <header
      className={cns('header', scrolled && '_scrolled')}
      style={{
        background: settings.header_color,
      }}
    >
      <div className="container _full">
        <div className="header__wrapper">
          <div className="header__main">
            <div className="header__actions">
              <span className="header__action-link">
                <SvgIcon name="star" />
              </span>
              <span className="header__action-link">
                <SvgIcon name="menu" />
              </span>
            </div>

            <PurchasesSlider className="header__purchases" />
          </div>

          <div className="header__auth">
            {user ? (
              <div className="header-user header__user">
                <a
                  className="header-user__wrapper"
                  onClick={() => {
                    dispatch(setModal({ name: 'deposit' }))
                  }}
                >
                  <div className="header-user__cash">
                    <SvgIcon name="wallet" />
                  </div>
                  <div className="header-user__plus">
                    <SvgIcon name="plus" />
                  </div>
                </a>
                <div className="header-user__right">
                  <p className="header-user__name">@{user.userName}</p>
                  <p className="header-user__balance">{user.balance}P</p>
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
      </div>
    </header>
  )
}

export default Header
