import 'swiper/css'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-cards'
import './_products-slider.scss'

import cns from 'classnames'
import React from 'react'
import { Autoplay, EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const PageSlider = ({ fullWidth }: { fullWidth: boolean }) => {
  // const { slider: sliderData } = useAppSelector((state) => state.sessionState)

  const sliderData = [
    {
      id: '1',
      link_url: '/faq',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    {
      id: '2',
      link_url: '/faq',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    {
      id: '3',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    {
      id: '4',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    // {
    //   id: '5',
    //   link_url: '/faq',
    //   photo_url: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
    // },
    // {
    //   id: '6',
    //   link_url: '/',
    //   photo_url: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
    // },
    // {
    //   id: '7',
    //   link_url: '/',
    //   photo_url: 'https://klike.net/uploads/posts/2020-04/1587719801_3.jpg',
    // },
  ]

  return (
    <section className={cns('slider', !fullWidth && '_compact')}>
      {sliderData && sliderData.length && (
        <>
          <p className="slider__title h2-title tac">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</p>
          <Swiper
            modules={[Autoplay, EffectCards]}
            slidesPerView={'auto'}
            // autoplay={{ delay: 4000 }}
            // centeredSlides={true}
            slideToClickedSlide={true}
            effect="cards"
            cardsEffect={{
              perSlideOffset: 100,
              perSlideRotate: 2,
              rotate: true,
              slideShadows: false,
            }}
          >
            {sliderData.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <a href={item.link_url} className="slider__card">
                  <img src={item.photo_url} alt={item.id} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </section>
  )
}

export default PageSlider
