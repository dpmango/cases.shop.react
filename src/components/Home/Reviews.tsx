import { ProductCard, ReviewCard } from '@/components/Product'
import { FaqToggleIcon } from '@/components/Ui'
import { IReviewShort } from '@/core/interface/Homepage'
import { IProductCategory } from '@/core/interface/Product'
import { IReviewDto } from '@/core/interface/Review'

export const HomeReviews: React.FC<{ reviews?: IReviewDto[] }> = ({ reviews }) => {
  if (!reviews) return

  return (
    <section className="sec-def sec-reviews" id="reviews">
      <div className="container-def">
        <div className="sec-def__wrap">
          <h2 className="title-def title-def_sec sec-def__title">Отзывы</h2>
          <div className="sec-def__content">
            <div className="rewiews rewiews_masonry rewiews_limit">
              {reviews.map((x, idx) => (
                <ReviewCard {...x} key={idx} />
              ))}
            </div>
            <button className="sec-def__btn btn-show sec-reviews__btn">Показать ещё</button>
          </div>
        </div>
      </div>
    </section>
  )
}
