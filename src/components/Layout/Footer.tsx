import cns from 'classnames'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { useAppSelector } from '@/core/store'

const Footer: React.FC = () => {
  const { paymentsMethods, customPages } = useAppSelector((state) => state.sessionState)

  return (
    <footer className="sec-footer bg">
      <div className="container-def">
        <div className="sec-footer__wrap">
          <div className="sec-footer__content">
            <div className="sec-footer__left">
              <div className="sec-footer__text">© 2023 RuPlayShop</div>

              {customPages.map((x, idx) => (
                <Link className="sec-footer__text" href={`/${x[1]}`} key={idx}>
                  {x[0]}
                </Link>
              ))}
            </div>
            <div className="sec-footer__right">
              <div className="pay-info">
                <div className="pay-info__title sec-footer__text">Принимаем к оплате</div>
                {paymentsMethods.map((pay, idx) => (
                  <div className="pay-info__el pay-info-el" key={pay.id}>
                    <img className="pay-info-el__img" src={pay.icon} alt={pay.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
