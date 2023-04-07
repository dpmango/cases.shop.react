import { ReviewCard } from '@c/Review'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getReviews } from '@/core/api/review.api'

export const Page = () => {
  const { id: shopId, settings } = useAppSelector((state) => state.sessionState)
  const { reviews } = useAppSelector((state) => state.productState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (reviews === null && shopId) {
      dispatch(getReviewsThunk({ shopId }))
    }
  }, [shopId])

  const loadMore = async () => {
    const { data } = await getReviews({ shopId, offset: reviews?.length })

    if (data) {
      dispatch(updateReviews([...(reviews || []), ...data]))

      if (data.length < 10) document.querySelector(`.rev__btn .bttn`).style.display = `none`
    }
  }

  return (
    <div
      style={{
        background: settings.background_site_color ? settings.background_site_color : '#000000',
      }}
    >
      {/* <img src="img/fire-big2.png" alt="" class="fire"> */}

      {settings.reviews_footer_image && (
        <img src={settings.reviews_footer_image} alt="" className="fire" />
      )}

      <section className="rev" id="rev">
        <div className="container">
          <h1>ОТЗЫВЫ</h1>
          <div className="rev__wrap">
            <div className="rev__box">
              {reviews && reviews.map((el, key) => <ReviewCard key={key} {...el} />)}
            </div>

            <a onClick={() => loadMore()} className="rev__btn bttn">
              Загрузить больше
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
