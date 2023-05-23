import './_product-card.scss'

import cns from 'classnames'

import { UiLink } from '@/components/Ui'
import { IProductDto } from '@/core/interface/Product'

interface IProductCardProps extends IProductDto {
  // index: number
}

const ProductCard = ({ name, images, price, salePrice, id }: IProductCardProps) => {
  const { settings } = useAppSelector((state) => state.sessionState)

  return (
    <UiLink href={`product/${id}`} key={id} className={`product-card`}>
      <p className="product-card__name">{name}</p>
      <div
        className="product-card__top"
        // style={{
        //   background: `url(${images?.length && images[1]}) no-repeat center center / cover`,
        // }}
      >
        {images?.length > 0 && (
          <div className="product-card__image" style={{ clipPath: settings.itemClip }}>
            <img src={images[0]} alt={name} loading="lazy" />
          </div>
        )}
      </div>

      <div className="product-card__action">
        <p className={cns('product-card__price', price !== salePrice && '_discount')}>
          <span className="product-card__price-old">{formatPrice(price)}</span>
          {formatPrice(salePrice)}
        </p>
      </div>
    </UiLink>
  )
}

export default ProductCard
