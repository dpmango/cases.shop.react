import 'swiper/css'
import 'swiper/scss/autoplay'
import './_products-slider.scss'

import cns from 'classnames'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const ProductsSlider = () => {
  const { specialOffers } = useAppSelector((state) => state.sessionState)

  const sliderData = [
    // ...specialOffers.map((x, idx) => ({
    //   id: idx + 99,
    //   link_url: '/',
    //   photo_url: x,
    // })),
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
    {
      id: '6',
      link_url: '/',
      photo_url: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
    },
    {
      id: '7',
      link_url: '/',
      photo_url: 'https://klike.net/uploads/posts/2020-04/1587719801_3.jpg',
    },
    {
      id: '5',
      link_url: '/faq',
      photo_url: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
    },
  ]

  return (
    <section className={cns('slider', false && '_compact')}>
      {sliderData && sliderData.length && (
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
                <a href={item.link_url} className="slider__card">
                  <img src={item.photo_url} loading="lazy" alt={item.id} />
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
