import cns from 'classnames'
import throttle from 'lodash/throttle'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

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
  StarIcon,
  SupportIcon,
  UiModal,
  UserIcon,
  Wallet2Icon,
  WalletIcon,
} from '@/components/Ui'
import { useEventListener, useScrollLock } from '@/core/hooks'
import { IProfileDto } from '@/core/interface/Initialization'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { setMobileMenu, setModal } from '@/core/store/ui.store'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [balanceDropdown, setBalanceDropdown] = useState(false)

  const { id: shopId, settings, user, auth_bot } = useAppSelector((state) => state.sessionState)
  const { modal, mobileMenuActive } = useAppSelector((state) => state.uiState)
  const dispatch = useAppDispatch()
  const { lockScroll, unlockScroll } = useScrollLock()

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

  return (
    <>
      <header
        className={cns('top-menu', scrolled && 'bg')}
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
                  <img className="logo-def__img" src="/img/logo.svg" alt="" />
                  <img
                    className="logo-def__img logo-def__img-black"
                    src="/img/logo_black.svg"
                    alt=""
                  />
                </Link>
                <nav className="top-menu__links">
                  <ul className="links-def">
                    <li className="links-def__el">
                      <Link className="links-def__link" href="/#games">
                        Игры
                      </Link>
                    </li>
                    <li className="links-def__el">
                      <Link className="links-def__link" href="/#reviews">
                        Отзывы
                      </Link>
                    </li>
                    <li className="links-def__el">
                      <Link className="links-def__link" href="/#faq">
                        Ответы на вопросы
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="top-menu__right">
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
                <a className="action-btn action-btn_red top-menu__btn" href="#">
                  <div className="action-btn__count">2</div>
                  <div className="action-btn__content">
                    <div className="action-btn__icon">
                      <NotificationIcon />
                    </div>
                  </div>
                </a>
                <a className="action-btn top-menu__btn" href="#">
                  <div className="action-btn__count">39</div>
                  <div className="action-btn__content">
                    <div className="action-btn__icon">
                      <StarIcon />
                    </div>
                  </div>
                </a>

                {user ? (
                  <>
                    <a className="action-btn action-btn_red top-menu__btn" href="#">
                      <div className="action-btn__count">1</div>
                      <div className="action-btn__content">
                        <div className="action-btn__icon">
                          <WalletIcon />
                        </div>
                      </div>
                    </a>
                    <div className={cns('action-btn top-menu__btn', balanceDropdown && 'active')}>
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
                          <div className="balance-info__cost">25 045,62 ₽</div>
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
                              <button className="theme-btn__btn theme-btn__btn_black active">
                                <DarkThemeIcon />
                                <span>Тёмная</span>
                              </button>
                              <button className="theme-btn__btn theme-btn__btn_white">
                                <LightThemeIcon />
                                <span>Светлая</span>
                              </button>
                            </div>
                          </div>
                          <div className="action-btn__dropdown-links">
                            <a className="action-btn__dropdown-link" href="#">
                              Сменить пароль
                            </a>
                            <a className="action-btn__dropdown-link" href="#">
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
              <a className="links-profile__link" href="#">
                Главная
              </a>
            </li>
            <li className="links-profile__el">
              <a className="links-profile__link" href="#">
                Отзывы
              </a>
            </li>
            <li className="links-profile__el">
              <a className="links-profile__link" href="#">
                Ответы на вопросы
              </a>
            </li>
            <li className="links-profile__el">
              <a className="links-profile__link" href="#">
                Договор оферты
              </a>
            </li>
          </ul>
          <div className="menu-mob__footer">
            <div className="pay-info">
              <div className="pay-info__title">Принимаем к оплате</div>
              <div className="pay-info__el pay-info-el">
                <img className="pay-info-el__img" src="/img/pay/1.svg" alt="" />
              </div>
              <div className="pay-info__el pay-info-el">
                <img className="pay-info-el__img" src="/img/pay/2.svg" alt="" />
              </div>
              <div className="pay-info__el pay-info-el">
                <img className="pay-info-el__img" src="/img/pay/3.svg" alt="" />
              </div>
            </div>
            <div className="menu-mob__text">© 2023 RuPlayShop</div>
          </div>
        </div>
      </div>

      <UiModal className="modal-act profile-mob" name="profile-mob">
        <div className="profile-mob__content">
          <div className="profile-mob__title">Профиль</div>
          <div className="balance-info profile-mob__balance">
            <div className="balance-info__top">
              <div className="action-btn__dropdown-title">Баланс</div>
              <Wallet2Icon />
            </div>
            <div className="balance-info__cost">25 045,62 ₽</div>
            <button
              className="balance-info__btn btn-def btn-def_full btn-modal"
              onClick={() => {
                dispatch(setModal({ name: 'balance' }))
              }}
            >
              <span>Пополнить</span>
            </button>
          </div>
          <div className="profile-mob__notify notify-info">
            <div className="notify-info__top">
              <div className="notify-info__title">Уведомления</div>
              <div className="notify-info__count count-def">9</div>
            </div>
            <div className="notify-info__content">
              <div className="notify-info__el notify-info-el">
                <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="profile-mob__theme">
            <div className="action-btn__dropdown-title">Тема</div>
            <div className="theme-btn">
              <button className="theme-btn__btn theme-btn__btn_black active">
                <DarkThemeIcon />
                <span>Тёмная</span>
              </button>
              <button className="theme-btn__btn theme-btn__btn_white">
                <LightThemeIcon />
                <span>Светлая</span>
              </button>
            </div>
          </div>
          <ul className="profile-mob__links links-profile">
            <li className="links-profile__el">
              <a className="links-profile__link" href="#">
                Сменить пароль
              </a>
            </li>
            <li className="links-profile__el">
              <a className="links-profile__link" href="#">
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </UiModal>

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
          <button
            className={cns('mobile-navi__el act-mob', modal === 'support' && 'active')}
            onClick={() => {
              dispatch(setModal({ name: 'support' }))
            }}
          >
            <div className="act-mob__count">2</div>
            <div className="act-mob__icon">
              <MobNavSupportIcon />
            </div>
          </button>
          <a className="mobile-navi__el act-mob" href="#">
            <div className="act-mob__count act-mob__count_black">39</div>
            <div className="act-mob__icon">
              <MobNavStarIcon />
            </div>
          </a>
          <a className="mobile-navi__el act-mob" href="#">
            <div className="act-mob__count">1</div>
            <div className="act-mob__icon">
              <MobNavWalletIcon />
            </div>
          </a>
          <button
            className={cns('mobile-navi__el act-mob', modal === 'profile-mob' && 'active')}
            onClick={() => {
              dispatch(setModal({ name: 'profile-mob' }))
            }}
          >
            <div className="act-mob__count">9</div>
            <div className="act-mob__icon">
              <MobNavProfileIcon />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
