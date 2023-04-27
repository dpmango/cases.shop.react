import './_products-slider.scss'

import cns from 'classnames'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { UiLoader } from '@/components/Ui'

const ProductsSlider = () => {
  const { specialOffers } = useAppSelector((state) => state.sessionState)

  const sliderData = [
    ...specialOffers.map((x, idx) => ({
      id: idx,
      link_url: x[1],
      photo_url: x[0],
    })),
  ]

  return (
    <section className={cns('slider', false && '_compact')}>
      {sliderData && sliderData.length > 0 && (
        <>
          <p className="slider__title h2-title tac">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</p>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={'auto'}
            autoplay={{ delay: 5000 }}
            centeredSlides={true}
            slideToClickedSlide={true}
          >
            {sliderData.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <a
                  href={item.link_url}
                  target={item.link_url.startsWith('http') ? '_blank' : ''}
                  className="slider__card"
                  rel="noreferrer"
                >
                  <img src={item.photo_url} loading="lazy" alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </section>
  )
}

export default ProductsSlider
