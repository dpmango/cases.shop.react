// import { Layout } from '@c/Layout'
import SliderPage from '@c/home/Slider'
import { UiLink } from '@c/Ui'
import cns from 'classnames'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useRecoilState, useRecoilValue } from 'recoil'

import { getIsMain, getItems, getShopId, getShopSettings } from '@/core/storage/selectors/main'

export const Page: React.FC = () => {
  const [loaderShown, setLoaderShown] = useState<boolean>(false)
  // const { userData } = useAppSelector((state) => state.sessionState)

  // const { search } = useLocation()
  // const { lockScroll, unlockScroll } = useScrollLock()

  const shopId = useRecoilValue(getShopId)
  const [, setIsMain] = useRecoilState(getIsMain)

  const settings = useRecoilValue(getShopSettings)
  const [items, setItems] = useRecoilState(getItems)

  // useEffect(() => {
  //   if (items === null) {
  //     const fetchData = async () => {
  //       const { data } = await api(`items/${shopId}`, {})
  //       if (data) {
  //         setItems(data)
  //       }
  //     }
  //     fetchData()
  //   }
  // }, [])

  // useEffect(() => {
  //   setIsMain(true)

  //   return () => setIsMain(false)
  // }, [])

  return <>123</>
  // return (
  //   <>
  //     <img src={settings.footer_image} alt="" className={'fire'} />
  //     <section
  //       className={`main ${settings?.use_space ? 'main_space' : ''}`}
  //       id="main"
  //       style={{
  //         background: settings?.background_site_color ? settings?.background_site_color : '#000000',
  //       }}
  //     >
  //       <img src={settings.background_image} alt="" className="main__fire" />
  //       <div className="container">
  //         <SliderPage />
  //         <div className="main__wrap">
  //           {items
  //             ? Object.keys(items).map((item, index) => (
  //                 <div key={index}>
  //                   <h2>{item}</h2>
  //                   <div className="main__box main__box_1 d-flex">
  //                     {items[item].map((item, index) => (
  //                       <UiLink
  //                         to={`product/${item.id}`}
  //                         key={index}
  //                         className="main__item main__item_1"
  //                       >
  //                         <p className="main__name">{item.name}</p>
  //                         <div
  //                           className="main__top"
  //                           style={{
  //                             background: `url(${item.images[1]}) no-repeat center center / cover`,
  //                           }}
  //                         >
  //                           <img src={item.images[0]} alt="" className="main__pic" />
  //                         </div>
  //                         <div className="main__block">
  //                           <p className="main__sum">
  //                             {item.salePrice} Р{' '}
  //                             {item.price !== item.salePrice ? <sup>{item.price} P</sup> : ''}
  //                           </p>
  //                         </div>
  //                       </UiLink>
  //                     ))}
  //                   </div>
  //                 </div>
  //               ))
  //             : ''}
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // )
}
