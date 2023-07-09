import './_product.scss'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import { useLocation } from 'react-router'
import { Thumbs } from 'swiper'
import { Swiper, type Swiper as SwiperRef, SwiperSlide } from 'swiper/react'

import { ProductReviews } from '@/components/Product'
import { SvgIcon, UiButton, UiLink } from '@/components/Ui'
import { IProductFullDto } from '~/src/core/interface/Product'

interface IProductPageProps {
  product: IProductFullDto
}

const ProductPage: React.FC<IProductPageProps> = ({ product }) => {
  const { user, paymentsType } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  const location = useLocation()
  const hrefID = location.pathname.split('/')[2]

  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)

  const paymentOptions = useMemo(() => {
    return [
      ...paymentsType.map((x) => {
        const [name, id, img, min, max] = x
        return {
          id: id,
          src: img,
        }
      }),
    ]
  }, [paymentsType])

  const gallery = useMemo(() => {
    if (Array.isArray(product.images)) {
      return product.images.slice(2)
    }

    return []
  }, [product.images])

  const generatePaymentLink = async () => {
    if (!user) {
      dispatch(setModal({ name: 'auth' }))
      return
    } else if (user) {
      if (user.balance >= +(product.salePrice || product.price)) {
        await saveProductToBot({ id: product.id || hrefID })

        dispatch(setModal({ name: 'order' }))
        return
      }
    }

    const { data } = await getPayment({
      amount: +(product.salePrice || product.price) - +(user?.balance || 0),
      type: paymentOptions[0].id,
    })

    if (data) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.setAttribute('style', 'display: none')
      a.href = data.url
      a.target = '_blank'
      a.click()
      document.body.removeChild(a)
    }
  }

  return (
    <PhotoProvider>
      <div className="container">
        <UiLink href={'/'} className="product__back heading__back custom-page__back">
          <SvgIcon name="caret-left" />
          <span className="h5-title">На главную</span>
        </UiLink>
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

            {gallery.length > 1 && (
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
            )}
          </div>

          {/* content */}
          <div className="product__content">
            <div className="product__wysiwyg wysiwyg">
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            <div className="product__payment">
              <p className="product__price">
                {formatPrice(product.salePrice)}
                {product.price !== product.salePrice ? <sup>{formatPrice(product.price)}</sup> : ''}
              </p>
              <div className="product__options">
                {paymentOptions.map((x) => (
                  <div key={x.id} className="product__options-el">
                    <img src={x.src} alt={x.id} />
                  </div>
                ))}
              </div>
            </div>

            <UiButton as="a" onClick={generatePaymentLink} className={`product__btn`}>
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
