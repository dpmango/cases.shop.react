import './_purchases.scss'
import 'swiper/scss'

import cns from 'classnames'
import { FreeMode, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { UiLink } from '@/components/Ui'

interface ILastPurchasesProps {
  className: string
}

const LastPurchases: React.FC<ILastPurchasesProps> = ({ className }) => {
  const { lastPurchases } = useAppSelector((state) => state.sessionState)

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
            <UiLink
              className="purchases__slide"
              href={`/product/${order.itemId}`}
              style={{
                background: order.img.startsWith('http')
                  ? `url(${order.img}) no-repeat center center / cover`
                  : 'auto',
              }}
              title={order.name}
            >
              <div className="purchases__slide-price">{order.price} Р</div>
            </UiLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LastPurchases
