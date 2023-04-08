import 'swiper/css'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const PageSlider = () => {
  // const { slider: sliderData } = useAppSelector((state) => state.sessionState)

  const sliderData = [
    {
      id: '1',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    {
      id: '1',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    {
      id: '1',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
  ]
  return (
    <section className="slider">
      {sliderData && sliderData.length && (
        <>
          <p className="slider__title h2-title tac">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</p>
          <Swiper autoplay={true} centeredSlides={true}>
            {sliderData.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <a href={item.link_url} className="slider__card">
                  <img
                    style={{
                      maxHeight: 650,
                      objectFit: 'contain',
                    }}
                    src={item.photo_url}
                    alt={item.id}
                  />
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
