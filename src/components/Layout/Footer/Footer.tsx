import cns from 'classnames'
import { useLocation } from 'react-router'

import { UiLink } from '@/components/Ui'

const Footer: React.FC = () => {
  const { settings } = useAppSelector((state) => state.sessionState)

  const location = useLocation()

  const isAltFooter =
    ['faq', 'product', 'reviews'].includes(location.pathname.split('/')[1]) || false

  const footerNav = [
    { link: '/reviews', name: 'Отзывы' },
    { link: '/faq', name: 'FAQ' },
    { link: '/', name: 'Поддержка' },
  ]
  return (
    <footer
      className={cns('footer', isAltFooter && 'footer2')}
      id="footer"
      style={{
        background: !isAltFooter ? settings.footer_color : 'transparent',
      }}
    >
      <div className="container">
        <ul className="footer__list">
          {footerNav.map((item, idx) => (
            <li key={idx} className="footer__item">
              <UiLink href={item.link} className="footer__link">
                {item.name}
              </UiLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
