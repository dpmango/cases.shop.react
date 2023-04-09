import './_product.scss'

// import ReactMarkdown from 'react-markdown'
import { PhotoProvider, PhotoView } from 'react-photo-view'
// import remarkGfm from 'remark-gfm'
import { Thumbs } from 'swiper'
import { Swiper, type Swiper as SwiperRef, SwiperSlide } from 'swiper/react'

import { ProductReviews } from '@/components/Product'
import { UiButton } from '@/components/Ui'
import { IProductDto } from '~/src/core/interface/Product'

interface IProductPageProps {
  product: IProductDto
}

const ProductPage: React.FC<IProductPageProps> = ({ product }) => {
  const { id: shopId, user } = useAppSelector((state) => state.sessionState)
  const { items, reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null)

  useEffect(() => {
    if (reviews === null && shopId) {
      dispatch(getReviewsThunk({ shopId }))
    }
    if (items === null && shopId) {
      dispatch(getProductThunk({ shopId }))
    }
  }, [shopId])

  const generatePaymentLink = async () => {
    const { data } = await getPayment({ amount: +product.price - +(user?.balance || 0) })

    if (data) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      // @ts-ignore
      a.style = 'display: none'
      a.href = data.payment_link
      a.target = '_blank'
      a.click()
      document.body.removeChild(a)
    }
  }

  const paymentOptions = useMemo(() => {
    return [
      {
        id: 'credit_card',
        src: '/img/payment/payment-cc.png',
        srcset: '/img/payment/payment-cc@2x.png 2x',
      },
      {
        id: 'qiwi',
        src: '/img/payment/payment-qiwi.png',
        srcset: '/img/payment/payment-qiwi@2x.png 2x',
      },
      {
        id: 'yoomoney',
        src: '/img/payment/payment-cc.png',
        srcset: '/img/payment/payment-cc@2x.png 2x',
      },
    ]
  }, [])

  const gallery = useMemo(() => {
    return Array.from(product.images).reverse()
  }, [product.images])

  return (
    <PhotoProvider>
      <div className="container">
        <h1 className="h1-title product__title">{product.name}</h1>
        <div className="product__box ">
          <div className="product__left">
            <Swiper
              modules={[Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              slidesPerView={1}
              className="product__slider"
            >
              {gallery.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <PhotoView src={img}>
                    <span className="product__gallery-image">
                      <img src={img} loading={idx === 0 ? 'eager' : 'lazy'} alt="" />
                    </span>
                  </PhotoView>
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              className="product__thumbs"
              modules={[Thumbs]}
              slidesPerView={'auto'}
              spaceBetween={10}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
            >
              {gallery.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="product__thumb" key={idx}>
                    <img src={img} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* content */}
          <div className="product__content">
            <div className="product__el">
              <p className="product__name h5-title _canada">Описание:</p>
              <p className="product__text p-regular markdown">
                {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.description}</ReactMarkdown> */}
                {product.description}
              </p>
            </div>

            <div className="product__el">
              <p className="product__name h5-title _canada">В наборе:</p>
              <ul className="product__list">
                <li className="product__li">todo - добавить отдельный массив в апи </li>
              </ul>
            </div>

            <div className="product__payment">
              <p className="product__price">
                {product.salePrice} Р
                {product.price !== product.salePrice ? <sup>{product.price} P</sup> : ''}
              </p>
              <div className="product__options">
                {paymentOptions.map((x) => (
                  <div key={x.id} className="product__options-el">
                    <img src={x.src} srcSet={x.srcset} alt={x.id} />
                  </div>
                ))}
              </div>
            </div>

            <UiButton
              as="a"
              onClick={() => {
                if (user) {
                  if (user.balance >= +product.price) {
                    dispatch(setModal({ name: 'order' }))
                  } else generatePaymentLink()
                } else {
                  dispatch(setModal({ name: 'auth' }))
                }
              }}
              className={`product__btn`}
            >
              КУПИТЬ
            </UiButton>
          </div>
        </div>

        <ProductReviews />
      </div>
    </PhotoProvider>
  )
}

export default ProductPage
