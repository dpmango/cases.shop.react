import cns from 'classnames'
// import { localStorageGet, localStorageSet } from '@/core/utils'
import { getCookie, setCookie } from 'cookies-next'
import throttle from 'lodash/throttle'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import {
  BurgerIcon,
  CloseIcon,
  DarkThemeIcon,
  LightThemeIcon,
  LoginIcon,
  MobNavGamesIcon,
  MobNavProfileIcon,
  MobNavStarIcon,
  MobNavSupportIcon,
  MobNavWalletIcon,
  NotificationIcon,
  PayAnypayIcon,
  PayLavaIcon,
  PayPaypalIcon,
  StarIcon,
  SupportIcon,
  UiModal,
  UserIcon,
  Wallet2Icon,
  WalletIcon,
} from '@/components/Ui'
import { useClickOutside, useEventListener, useScrollLock } from '@/core/hooks'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { resetState } from '@/core/store/session.store'
import { closeModals, setMobileMenu, setModal } from '@/core/store/ui.store'
import { formatPrice, scrollToElement } from '@/core/utils'

const Header = () => {
  const [theme, setTheme] = useState<string>(getCookie('theme') || 'dark')
  const [scrolled, setScrolled] = useState(false)
  const [balanceDropdown, setBalanceDropdown] = useState(false)

  const { user, paymentsMethods, customPages } = useAppSelector((state) => state.sessionState)
  const { modal, mobileMenuActive } = useAppSelector((state) => state.uiState)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const userDropdownRef = useRef<HTMLDivElement | null>(null)
  useClickOutside(userDropdownRef, () => setBalanceDropdown(false))

  const { lockScroll, unlockScroll } = useScrollLock()

  const setDarkTheme = useCallback(() => {
    const $html = document.querySelector('html')
    $html?.classList.remove('theme-white')

    setTheme('dark')
    setCookie('theme', 'dark')
  }, [])

  const setLightTheme = useCallback(() => {
    const $html = document.querySelector('html')
    $html?.classList.add('theme-white')

    setTheme('light')
    setCookie('theme', 'light')
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(resetState())
    router.push('/')
  }, [])

  const handleScrollTo = useCallback(
    (id: string, e?: React.MouseEvent<HTMLElement>) => {
      if (router.route === '/') {
        e?.preventDefault()
        scrollToElement(id)
      }
      if (modal) {
        dispatch(closeModals())
      }
      if (mobileMenuActive) {
        dispatch(setMobileMenu(false))
      }
    },
    [router, modal, mobileMenuActive],
  )

  const isAuthRoute = router.pathname.includes('/auth')

  // scroll functions
  const updateSticky = useCallback(() => {
    const startStickyAt = 0

    if (window.scrollY > startStickyAt) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  useEventListener('scroll', updateSticky)
  // useEventListener('resize', updateSticky)

  useEffect(() => {
    if (mobileMenuActive) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [mobileMenuActive])

  useEffect(() => {
    if (router.route === '/') {
      const routeHash = router.asPath.split('#')[1]
      if (routeHash) {
        handleScrollTo(routeHash)
      }
    }
  }, [router.route])

  return (
    <>
      <header
        className={cns('top-menu', (scrolled || modal) && 'bg')}
        style={
          {
            // background: settings.header_color,
          }
        }
      >
        <div className="container-def">
          <div className="top-menu__wrap">
            <div className="top-menu__content">
              <div className="top-menu__left">
                <Link className="logo-def top-menu__logo" href="/">
                  <img
                    className="logo-def__img"
                    src={`${process.env.BACKEND_URL}/img/logo.svg`}
                    alt=""
                  />
                  <img
                    className="logo-def__img logo-def__img-black"
                    src={`${process.env.BACKEND_URL}/img/logo_black.svg`}
                    alt=""
                  />
                </Link>
                <nav className="top-menu__links">
                  <ul className="links-def">
                    <li className="links-def__el">
                      <Link
                        className="links-def__link"
                        href="/#games"
                        onClick={(e) => handleScrollTo('games', e)}
                      >
                        Игры
                      </Link>
                    </li>
                    <li className="links-def__el">
                      <Link
                        className="links-def__link"
                        href="/#reviews"
                        onClick={(e) => handleScrollTo('reviews', e)}
                      >
                        Отзывы
                      </Link>
                    </li>
                    <li className="links-def__el">
                      <Link
                        className="links-def__link"
                        href="/#faq"
                        onClick={(e) => handleScrollTo('faq', e)}
                      >
                        Ответы на вопросы
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="top-menu__right">
                {user ? (
                  <>
                    <button
                      className="action-btn action-btn_long top-menu__btn btn-modal"
                      onClick={() => {
                        dispatch(setModal({ name: 'support' }))
                      }}
                    >
                      <div className="action-btn__content">
                        <div className="action-btn__text">Поддержка</div>
                        <div className="action-btn__icon">
                          <SupportIcon />
                        </div>
                      </div>
                    </button>
                    <Link
                      className={cns(
                        'action-btn top-menu__btn',
                        user.notifications > 0 && 'action-btn_red',
                      )}
                      href="/notifications"
                    >
                      {user.notifications > 0 && (
                        <div className="action-btn__count">{user.notifications}</div>
                      )}
                      <div className="action-btn__content">
                        <div className="action-btn__icon">
                          <NotificationIcon />
                        </div>
                      </div>
                    </Link>
                    <Link
                      className={cns(
                        'action-btn top-menu__btn',
                        user.favourites.items > 0 && 'action-btn_red',
                      )}
                      href="/favourites"
                    >
                      {user.favourites.items > 0 && (
                        <div className="action-btn__count">{user.favourites.items}</div>
                      )}
                      <div className="action-btn__content">
                        <div className="action-btn__icon">
                          <StarIcon />
                        </div>
                      </div>
                    </Link>
                    <Link
                      className={cns('action-btn top-menu__btn', user.orders && 'action-btn_red')}
                      href="/orders"
                    >
                      {user.orders > 0 && <div className="action-btn__count">{user.orders}</div>}
                      <div className="action-btn__content">
                        <div className="action-btn__icon">
                          <WalletIcon />
                        </div>
                      </div>
                    </Link>
                    <div
                      className={cns('action-btn top-menu__btn', balanceDropdown && 'active')}
                      ref={userDropdownRef}
                    >
                      <button
                        className="action-btn__content"
                        onClick={() => setBalanceDropdown(!balanceDropdown)}
                      >
                        <div className="action-btn__icon">
                          <UserIcon />
                        </div>
                      </button>
                      <div
                        className="action-btn__dropdown"
                        style={{ display: balanceDropdown ? 'block' : 'none' }}
                      >
                        <div className="balance-info">
                          <div className="balance-info__top">
                            <div className="action-btn__dropdown-title">Баланс</div>
                            <Wallet2Icon />
                          </div>
                          <div className="balance-info__cost">{formatPrice(user.balance)}</div>
                          <button
                            className="balance-info__btn btn-def btn-def_full btn-modal"
                            onClick={() => {
                              dispatch(setModal({ name: 'balance' }))
                            }}
                          >
                            <span>Пополнить</span>
                          </button>
                        </div>
                        <div className="action-btn__dropdown-content">
                          <div className="action-btn__dropdown-block">
                            <div className="action-btn__dropdown-title">Тема</div>
                            <div className="theme-btn">
                              <button
                                className={cns(
                                  'theme-btn__btn theme-btn__btn_black',
                                  theme === 'dark' && 'active',
                                )}
                                onClick={setDarkTheme}
                              >
                                <DarkThemeIcon />
                                <span>Тёмная</span>
                              </button>
                              <button
                                className={cns(
                                  'theme-btn__btn theme-btn__btn_white',
                                  theme === 'light' && 'active',
                                )}
                                onClick={setLightTheme}
                              >
                                <LightThemeIcon />
                                <span>Светлая</span>
                              </button>
                            </div>
                          </div>
                          <div className="action-btn__dropdown-links">
                            <Link
                              href="/auth/change-password"
                              className="action-btn__dropdown-link"
                            >
                              Сменить пароль
                            </Link>
                            <a className="action-btn__dropdown-link" onClick={handleLogout}>
                              Выйти
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href="/auth">
                    <button className="btn-def top-menu__btnSign">
                      <LoginIcon />
                      <span>Вход</span>
                    </button>
                  </Link>
                )}
              </div>
              <div
                className="top-menu__burger btn-burger"
                onClick={() => dispatch(setMobileMenu(!mobileMenuActive))}
              >
                <BurgerIcon />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cns('menu-mob', mobileMenuActive && 'actve')}
        style={{ display: mobileMenuActive ? 'block' : 'none' }}
      >
        <div className="menu-mob__content">
          <div className="menu-mob__top">
            <div className="menu-mob__title">Меню</div>
            <div
              className="close-btn menu-mob__close"
              onClick={() => dispatch(setMobileMenu(false))}
            >
              <CloseIcon />
            </div>
          </div>
          <ul className="menu-mob__links links-profile">
            <li className="links-profile__el">
              <Link className="links-profile__link" href="/">
                Главная
              </Link>
            </li>
            <li className="links-profile__el">
              <Link
                className="links-profile__link"
                href="/#reviews"
                onClick={(e) => handleScrollTo('reviews', e)}
              >
                Отзывы
              </Link>
            </li>
            <li className="links-profile__el">
              <Link
                className="links-profile__link"
                href="/#faq"
                onClick={(e) => handleScrollTo('faq', e)}
              >
                Ответы на вопросы
              </Link>
            </li>
            {customPages.map((x, idx) => (
              <li className="links-profile__el" key={idx}>
                <Link className="links-profile__link" href={`/page/${x[1]}`} key={idx}>
                  {x[0]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-mob__footer">
            <div className="pay-info">
              <div className="pay-info__title">Принимаем к оплате</div>
              {paymentsMethods.map((pay, idx) => (
                <div className="pay-info__el pay-info-el" key={pay.id}>
                  {pay.id === 'lavaru' && <PayLavaIcon />}
                  {pay.id === 'paypalych' && <PayPaypalIcon />}
                  {pay.id === 'anypay' && <PayAnypayIcon />}

                  {!['lavaru', 'paypalych', 'anypay'].includes(pay.id) && (
                    <img className="pay-info-el__img" src={pay.icon} alt={pay.name} />
                  )}
                </div>
              ))}
            </div>
            <div className="menu-mob__text">© 2023 RuPlayShop</div>
          </div>
        </div>
      </div>

      {user && (
        <UiModal className="modal-act profile-mob" name="profile-mob">
          <div className="profile-mob__content">
            <div className="profile-mob__title">Профиль</div>
            <div className="balance-info profile-mob__balance">
              <div className="balance-info__top">
                <div className="action-btn__dropdown-title">Баланс</div>
                <Wallet2Icon />
              </div>
              <div className="balance-info__cost">{formatPrice(user.balance)}</div>
              <button
                className="balance-info__btn btn-def btn-def_full btn-modal"
                onClick={() => {
                  dispatch(setModal({ name: 'balance' }))
                }}
              >
                <span>Пополнить</span>
              </button>
            </div>
            {/* <div className="profile-mob__notify notify-info">
              <div className="notify-info__top">
                <div className="notify-info__title">Уведомления</div>
                <div className="notify-info__count count-def">9</div>
              </div>
              <div className="notify-info__content">
                <div className="notify-info__el notify-info-el">
                  <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
                </div>
              </div>
            </div> */}
            <div className="profile-mob__theme">
              <div className="action-btn__dropdown-title">Тема</div>
              <div className="theme-btn">
                <button
                  className={cns(
                    'theme-btn__btn theme-btn__btn_black',
                    theme === 'dark' && 'active',
                  )}
                  onClick={setDarkTheme}
                >
                  <DarkThemeIcon />
                  <span>Тёмная</span>
                </button>
                <button
                  className={cns(
                    'theme-btn__btn theme-btn__btn_white',
                    theme === 'light' && 'active',
                  )}
                  onClick={setLightTheme}
                >
                  <LightThemeIcon />
                  <span>Светлая</span>
                </button>
              </div>
            </div>
            <ul className="profile-mob__links links-profile">
              <li className="links-profile__el">
                <Link href="/auth/change-password" className="links-profile__link">
                  Сменить пароль
                </Link>
              </li>
              <li className="links-profile__el">
                <a className="links-profile__link" onClick={handleLogout}>
                  Выйти
                </a>
              </li>
            </ul>
          </div>
        </UiModal>
      )}

      <div className="mobile-navi">
        <div className="mobile-navi__content">
          <button
            className={cns('mobile-navi__el act-mob', modal === 'games' && 'active')}
            onClick={() => {
              dispatch(setModal({ name: 'games' }))
            }}
          >
            <div className="act-mob__icon">
              <MobNavGamesIcon />
            </div>
          </button>
          {user && (
            <>
              <button
                className={cns('mobile-navi__el act-mob', modal === 'support' && 'active')}
                onClick={() => {
                  dispatch(setModal({ name: 'support' }))
                }}
              >
                {/* <div className="act-mob__count">2</div> */}
                <div className="act-mob__icon">
                  <MobNavSupportIcon />
                </div>
              </button>
              <Link className="mobile-navi__el act-mob" href="/favourites">
                {user.favourites.items > 0 && (
                  <div className="act-mob__count">{user.favourites.items}</div>
                )}
                <div className="act-mob__icon">
                  <MobNavStarIcon />
                </div>
              </Link>
              <Link className="mobile-navi__el act-mob" href="/orders">
                {user.orders > 0 && <div className="act-mob__count">{user.orders}</div>}
                <div className="act-mob__icon">
                  <MobNavWalletIcon />
                </div>
              </Link>
              <button
                className={cns('mobile-navi__el act-mob', modal === 'profile-mob' && 'active')}
                onClick={() => {
                  dispatch(setModal({ name: 'profile-mob' }))
                }}
              >
                {/* <div className="act-mob__count">9</div> */}
                <div className="act-mob__icon">
                  <MobNavProfileIcon />
                </div>
              </button>
            </>
          )}
          {!user && (
            <Link href="/auth">
              <button className={cns('mobile-navi__el act-mob', isAuthRoute && 'active')}>
                <div className="act-mob__icon">
                  <MobNavProfileIcon />
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
