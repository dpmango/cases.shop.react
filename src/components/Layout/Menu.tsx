import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

// import { useLocation, useNavigate } from 'react-router'
// import { UiLink } from '@/components/Ui'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { setSettings } from '@/core/store/ui.store'
import { scrollToElement } from '@/core/utils/scroll'

const Menu = () => {
  const { customPages } = useAppSelector((state) => state.sessionState)
  const { settingsOpen } = useAppSelector((state) => state.uiState)
  const { items } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()
  // const location = useLocation()

  const [homeAnchor, setHomeAnchor] = useState<string | null>()

  const siteNav = [
    { link: '/reviews', name: 'Отзывы' },
    { link: '/faq', name: 'FAQ' },
    ...customPages.map((x) => ({ link: `/${x[1]}`, name: x[0] })),
  ]

  const handleScrollClick = useCallback((e: React.MouseEvent, idx: number) => {
    e.preventDefault()
    // if (location.pathname !== '/') {
    //   // navigate('/')
    //   setHomeAnchor(`category${idx}`)
    // } else {
    //   scrollToElement(`category${idx}`)
    // }
    dispatch(setSettings(false))
  }, [])

  useEffect(() => {
    if (homeAnchor) {
      scrollToElement(homeAnchor)
      setHomeAnchor(null)
    }
  }, [homeAnchor])

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
                    <a href="#" onClick={(e) => handleScrollClick(e, idx)}>
                      {category.categoryName}
                    </a>
                  </li>
                )
              })}
          </ul>

          <ul className="settings__menu _nav">
            {siteNav.map((item, idx) => (
              <li key={idx} onClick={(e) => dispatch(setSettings(false))}>
                {/* <UiLink href={item.link}>{item.name}</UiLink> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
