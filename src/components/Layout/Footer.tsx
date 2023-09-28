import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

const Footer: React.FC = () => {
  // const { settings, customPages } = useAppSelector((state) => state.sessionState)

  const isAltFooter =
    ['faq', 'product', 'reviews'].includes(location.pathname.split('/')[1]) || false

  // const footerNav = [
  //   { link: '/reviews', name: 'Отзывы' },
  //   { link: '/faq', name: 'FAQ' },
  //   ...customPages.map((x) => ({ link: `/${x[1]}`, name: x[0] })),
  // ]

  return (
    <footer
      className={cns('footer', isAltFooter && 'footer2')}
      id="footer"
      // style={{
      //   background: !isAltFooter
      //     ? settings.footer_color
      //     : `${settings.background_site_color} url(${settings.background_main}) repeat center`,
      // }}
    >
      <div className="container">
        {/* <ul className="footer__list">
          {footerNav.map((item, idx) => (
            <li key={idx} className="footer__item">
              <UiLink href={item.link} className="footer__link">
                {item.name}
              </UiLink>
            </li>
          ))}
        </ul> */}
      </div>
    </footer>
  )
}

export default Footer
