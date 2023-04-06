import Modals from '@c/modals/modals'
import { UiLink } from '@c/Ui'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { getIsMain, getShopFooter, getShopSettings } from '@/core/storage/selectors/main'

const Footer: React.FC = () => {
  const footer = useRecoilValue(getShopFooter)

  const isMain = useRecoilValue(getIsMain)
  const settings = useRecoilValue(getShopSettings)

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
              <UiLink to={item.link} className="footer__link">
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
