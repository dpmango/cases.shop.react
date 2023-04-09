import { ReviewCard } from '@/components/Review'

const ProductReviews: React.FC = () => {
  const { items, reviews } = useAppSelector((state) => state.productState)

  return (
    <div className="product-rev">
      <p className="product-rev__title h2-title">Отзывы</p>
      <div className="product-rev__box">
        {reviews && reviews.map((el, key) => <ReviewCard key={key} {...el} />)}
      </div>
      <p className="product-rev__info p-regular">
        Отзывы загружаются автоматически из телеграм-канала
      </p>
    </div>
  )
}

export default ProductReviews
