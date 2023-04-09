import './_purchases.scss'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/mousewheel'

import cns from 'classnames'
import { FreeMode, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ILastPurchasesProps {
  className: string
}

const LastPurchases: React.FC<ILastPurchasesProps> = ({ className }) => {
  const { id: shopId, lastPurchases } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (lastPurchases === null && shopId) {
      dispatch(getOrdersThunk({ shopId }))
    }
  }, [shopId])

  return (
    <div className={cns('purchases', className)}>
      <Swiper
        modules={[Mousewheel, FreeMode]}
        slidesPerView={'auto'}
        freeMode={{ enabled: true, sticky: true }}
        mousewheel={{
          forceToAxis: true,
        }}
        spaceBetween={5}
        className="purchases__slider"
      >
        {lastPurchases?.map((order, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="purchases__slide"
              style={{
                background: order.img.startsWith('http')
                  ? `url(${order.img}) no-repeat center center / cover`
                  : 'auto',
              }}
              title={order.name}
            >
              <div className="purchases__slide-price">{order.price} Р</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LastPurchases
