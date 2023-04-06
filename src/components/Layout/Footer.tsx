import Modals from '@c/modals/modals'
import { UiLink } from '@c/Ui'
import React from 'react'

const Footer: React.FC = () => {
  const {
    id: shopId,
    settings,
    footer,
    is_main: isMain,
  } = useAppSelector((state) => state.sessionState)

  return footer ? (
    <footer
      className="footer"
      id="footer"
      style={{
        background: isMain ? settings.footer_color : 'transparent',
      }}
    >
      <div className="container">
        <ul className="footer__list d-flex">
          {footer.map((item, index) => (
            <li key={index} className="footer__item">
              <UiLink href={item.link} className="footer__link">
                {item.name}
              </UiLink>
            </li>
          ))}
        </ul>
      </div>

      <Modals />
    </footer>
  ) : (
    <></>
  )
}

export default Footer
