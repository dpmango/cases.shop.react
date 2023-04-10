import './_products-slider.scss'

import cns from 'classnames'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { UiLoader } from '@/components/Ui'

const ProductsSlider = () => {
  const [ready, setReady] = useState(false)

  const { specialOffers } = useAppSelector((state) => state.sessionState)

  const sliderData = [
    ...specialOffers.map((x, idx) => ({
      id: idx,
      link_url: x[1],
      photo_url: x[0],
    })),
  ]

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <>
      <UiLoader theme="page" loading={!ready} />
      <section className={cns('slider', false && '_compact', !ready && '_loading')}>
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
    </>
  )
}

export default ProductsSlider
