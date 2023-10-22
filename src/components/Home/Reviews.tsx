import { useState } from 'react'
import { toast } from 'react-toastify'

import { ProductCard, ReviewCard } from '@/components/Product'
import { FaqToggleIcon } from '@/components/Ui'
import { IReviewShort } from '@/core/interface/Homepage'
import { IProductCategory } from '@/core/interface/Product'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getReviewsThunk } from '@/core/store/product.store'

export const HomeReviews: React.FC<{}> = () => {
  const paginatePer = 9

  const { reviews } = useAppSelector((store) => store.productState)
  const dispatch = useAppDispatch()

  const [pagination, setPagination] = useState(paginatePer)
  const [paginationVisible, setPaginationVisible] = useState(reviews?.length! >= paginatePer)

  if (!reviews) return

  const displayReviews = reviews.slice(0, pagination)

  const paginationRequest = async () => {
    const result = await dispatch(getReviewsThunk({ limit: paginatePer, offset: pagination }))
    // @ts-expect-error
    const data = result.payload?.data as IReviewShort[]

    if (data && data.length) {
      setPaginationVisible(data.length === paginatePer)
      setPagination(pagination + paginatePer)
    } else {
      toast.error('Ошибка, попробуйте снова')
    }
  }

  return (
    <section className="sec-def sec-reviews" id="reviews">
      <div className="container-def">
        <div className="sec-def__wrap">
          <h2 className="title-def title-def_sec sec-def__title">Отзывы</h2>
          <div className="sec-def__content">
            <div className="rewiews rewiews_masonry rewiews_limit">
              {displayReviews.map((x, idx) => (
                <ReviewCard {...x} key={idx} />
              ))}
            </div>
            {paginationVisible && (
              <button
                className="sec-def__btn btn-show sec-reviews__btn"
                onClick={paginationRequest}
              >
                Показать ещё
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
