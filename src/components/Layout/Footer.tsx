import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

const Footer: React.FC = () => {
  // const { settings, customPages } = useAppSelector((state) => state.sessionState)

  // const footerNav = [
  //   { link: '/reviews', name: 'Отзывы' },
  //   { link: '/faq', name: 'FAQ' },
  //   ...customPages.map((x) => ({ link: `/${x[1]}`, name: x[0] })),
  // ]

  return (
    <footer className="sec-footer bg">
      <div className="container-def">
        <div className="sec-footer__wrap">
          <div className="sec-footer__content">
            <div className="sec-footer__left">
              <div className="sec-footer__text">© 2023 RuPlayShop</div>
              <a className="sec-footer__text" href="#">
                Договор оферты
              </a>
            </div>
            <div className="sec-footer__right">
              <div className="pay-info">
                <div className="pay-info__title sec-footer__text">Принимаем к оплате</div>
                <div className="pay-info__el pay-info-el">
                  <img className="pay-info-el__img" src="../img/pay/1.svg" alt="" />
                </div>
                <div className="pay-info__el pay-info-el">
                  <img className="pay-info-el__img" src="../img/pay/2.svg" alt="" />
                </div>
                <div className="pay-info__el pay-info-el">
                  <img className="pay-info-el__img" src="../img/pay/3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// <footer
// className={cns('footer', isAltFooter && 'footer2')}
// id="footer"
// // style={{
// //   background: !isAltFooter
// //     ? settings.footer_color
// //     : `${settings.background_site_color} url(${settings.background_main}) repeat center`,
// // }}
// >
// <div className="container">
//   {/* <ul className="footer__list">
//     {footerNav.map((item, idx) => (
//       <li key={idx} className="footer__item">
//         <UiLink href={item.link} className="footer__link">
//           {item.name}
//         </UiLink>
//       </li>
//     ))}
//   </ul> */}
// </div>
// </footer>
