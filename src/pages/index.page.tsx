import SliderPage from '@c/home/Slider'
import { ProductCard } from '@c/Product'
import React, { useEffect } from 'react'

export const Page: React.FC = () => {
  const { id: shopId, settings } = useAppSelector((state) => state.sessionState)
  const { productsFetching, items } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (items === null) {
      dispatch(getProductThunk({ shopId }))
    }
  }, [shopId])

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
            {!productsFetching &&
              items &&
              Object.keys(items).map((key: string, index) => {
                return (
                  <div className="prodCard" key={index}>
                    <h2 className="prodCard__title">{key}</h2>
                    <div className="main__box main__box_1 d-flex">
                      {items[key]?.length &&
                        items[key].map((card) => <ProductCard key={card.id} {...card} />)}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}
