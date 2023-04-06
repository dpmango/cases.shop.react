import SliderPage from '@c/home/Slider'
import React, { useEffect } from 'react'

import { UiLink } from '@/components/Ui'

export const Page: React.FC = () => {
  const { id: shopId, items, settings } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (items === null) {
      const fetchData = async () => {
        const { data } = await getProducts({ shopId })

        if (data) {
          dispatch(updateAnyState({ key: 'items', data }))
        }
      }
      fetchData()
    }
  }, [])

  useEffect(() => {
    dispatch(updateAnyState({ key: 'is_main', data: true }))
    return () => {
      dispatch(updateAnyState({ key: 'is_main', data: false }))
    }
  }, [])

  return (
    <>
      <img src={settings.footer_image} alt="" className={'fire'} />
      <section
        className={`main ${settings.use_space ? 'main_space' : ''}`}
        id="main"
        style={{
          background: settings.background_site_color ? settings.background_site_color : '#000000',
        }}
      >
        <img src={settings.background_image} alt="" className="main__fire" />
        <div className="container">
          <SliderPage />

          <div className="main__wrap">
            {items &&
              Object.keys(items).map((item, index) => (
                <div key={index}>
                  <h2>{item}</h2>
                  {/* <div className="main__box main__box_1 d-flex">
                    {items[item].map((item, index) => (
                      <UiLink
                        href={`product/${item.id}`}
                        key={index}
                        className="main__item main__item_1"
                      >
                        <p className="main__name">{item.name}</p>
                        <div
                          className="main__top"
                          style={{
                            background: `url(${item.images[1]}) no-repeat center center / cover`,
                          }}
                        >
                          <img src={item.images[0]} alt="" className="main__pic" />
                        </div>
                        <div className="main__block">
                          <p className="main__sum">
                            {item.salePrice} Р
                            {item.price !== item.salePrice && <sup>{item.price} P</sup>}
                          </p>
                        </div>
                      </UiLink>
                    ))}
                  </div> */}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
