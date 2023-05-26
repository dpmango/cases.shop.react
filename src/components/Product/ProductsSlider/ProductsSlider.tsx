import './_products-slider.scss'

import cns from 'classnames'
import { useNavigate, useParams } from 'react-router'
import { Autoplay } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { UiLoader } from '@/components/Ui'

const ProductsSlider = () => {
  const { specialOffers } = useAppSelector((state) => state.sessionState)
  const navigate = useNavigate()

  const sliderData = [
    ...specialOffers.map((x, idx) => ({
      id: idx,
      link_url: x[1],
      photo_url: x[0],
    })),
  ]

  const handleSlideClick = (swiper: any, event: any) => {
    if (swiper.animating) return

    const slide = sliderData[swiper.realIndex]
    if (!slide.link_url || slide.link_url === '#') return

    if (slide.link_url.startsWith('http')) {
      if (window.opener == null) {
        window.location.href = slide.link_url
      } else {
        window.open(slide.link_url)
      }
    } else {
      navigate(slide.link_url)
    }
  }

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
            onClick={handleSlideClick}
          >
            {sliderData.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <span className="slider__card" rel="noreferrer">
                  <img src={item.photo_url} loading="lazy" alt="" />
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </section>
  )
}

export default ProductsSlider
