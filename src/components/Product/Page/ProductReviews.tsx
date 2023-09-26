import cns from 'classnames'
import { FreeMode, Grid, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ReviewCard } from '@/components/Review'
import { UiButton, UiLink } from '@/components/Ui'

const ProductReviews: React.FC = () => {
  const { reviews } = useAppSelector((state) => state.productState)

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="product-rev">
      <p className="product-rev__title h2-title">Отзывы</p>

      <div className={cns('product-rev__slider', loaded && '_loaded')}>
        <Swiper
          modules={[Grid, FreeMode, Mousewheel]}
          freeMode={{ enabled: true, sticky: true }}
          spaceBetween={24}
          slidesPerView={'auto'}
          grid={{ fill: 'row', rows: 2 }}
          mousewheel={{
            forceToAxis: true,
          }}
        >
          {reviews &&
            reviews.map((el, idx) => (
              <SwiperSlide key={idx}>
                <ReviewCard {...el} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <p className="product-rev__info p-regular">
        Отзывы загружаются автоматически из телеграм-канала
      </p>

      <UiLink href="/reviews" className="product-rev__more">
        <UiButton size="small" theme="secondary">
          Перейти на страницу с отзывами
        </UiButton>
      </UiLink>
    </div>
  )
}

export default ProductReviews
