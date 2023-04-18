import './_menu.scss'

import cns from 'classnames'

import { SvgIcon, UiButton, UiLink } from '@/components/Ui'

const Menu = () => {
  const { settings, customPages } = useAppSelector((state) => state.sessionState)
  const { settingsOpen } = useAppSelector((state) => state.uiState)
  const { items } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  const footerNav = [
    { link: '/reviews', name: 'Отзывы' },
    { link: '/faq', name: 'FAQ' },
    ...customPages.map((x) => ({ link: `/${x[1]}`, name: x[0] })),
  ]

  return (
    <div
      className={cns('settings', settingsOpen && '_active')}
      onClick={() => dispatch(setSettings(false))}
    >
      <div className="settings__wrapper">
        <div className="settings__box" onClick={(e) => e.stopPropagation()}>
          <p className="h3-title">Категории</p>
          <ul className="settings__menu _menu">
            {items?.length &&
              items.map((category, idx) => {
                return (
                  <li key={idx}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToElement(`category${idx}`)
                        dispatch(setSettings(false))
                      }}
                    >
                      {category.categoryName}
                    </a>
                  </li>
                )
              })}
          </ul>

          <ul className="settings__menu _nav">
            {footerNav.map((item, idx) => (
              <li key={idx} onClick={(e) => dispatch(setSettings(false))}>
                <UiLink href={item.link}>{item.name}</UiLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
