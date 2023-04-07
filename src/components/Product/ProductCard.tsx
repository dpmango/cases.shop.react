import SliderPage from '@c/home/Slider'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { UiLink } from '@/components/Ui'
import { IProductDto } from '~/src/core/interface/Product'

interface IProductCardProps extends IProductDto {
  index: number
}

const ProductCard = ({ name, images, price, salePrice, id, index }: IProductCardProps) => {
  return (
    <Link to={`product/${id}`} key={id} className={`main__item main__item_${index}`}>
      <p className="main__name">{name}</p>
      <div
        className="main__top"
        style={{
          background: `url(${images?.length && images[1]}) no-repeat center center / cover`,
        }}
      >
        {images?.length && <img src={images[0]} alt="" className="main__pic" />}
      </div>

      <div className="main__block">
        <p className="main__sum">
          {salePrice} Р{price !== salePrice ? <sup>{price} P </sup> : ''}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
