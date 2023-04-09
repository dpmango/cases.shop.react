import './_product-card.scss'

import { UiLink } from '@/components/Ui'
import { IProductDto } from '@/core/interface/Product'

interface IProductCardProps extends IProductDto {
  // index: number
}

const ProductCard = ({ name, images, price, salePrice, id }: IProductCardProps) => {
  return (
    <UiLink href={`product/${id}`} key={id} className={`product-card`}>
      <p className="product-card__name">{name}</p>
      <div
        className="product-card__top"
        style={{
          background: `url(${images?.length && images[1]}) no-repeat center center / cover`,
        }}
      >
        {images?.length && <img src={images[0]} alt="" className="product-card__image" />}
      </div>

      <div className="product-card__action">
        <p className="product-card__price">
          {salePrice} Р{price !== salePrice ? <sup>{price} P </sup> : ''}
        </p>
      </div>
    </UiLink>
  )
}

export default ProductCard
