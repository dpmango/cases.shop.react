import { ReviewCard } from '@c/Review'
import React, { useEffect, useState } from 'react'

const ProductReviews: React.FC = () => {
  const { items, reviews } = useAppSelector((state) => state.productState)

  return (
    <div className="product-rev">
      <p className="product-rev__title">Отзывы</p>
      <div className="product-rev__box">
        {reviews && reviews.map((el, key) => <ReviewCard key={key} {...el} />)}
      </div>
      <p className="product-rev__info">Отзывы загружаются автоматически из телеграм-канала</p>
    </div>
  )
}

export default ProductReviews
