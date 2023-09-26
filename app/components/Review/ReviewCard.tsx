import dayjs from 'dayjs'

import { IReviewDto } from '@/core/interface/Review'

export const ReviewCard = (review: IReviewDto) => {
  const reviewDate = useMemo(() => {
    return dayjs(review.date).format('MM.DD.YYYY')
  }, [])

  return (
    <div className="rev-card">
      <div className="rev-card__top">
        <div className="rev-card__ava">
          <img src={review.ava} alt={review.nick} loading="lazy" />
        </div>

        <div className="rev-card__content">
          <p className="rev-card__name h5-title">{review.nick}</p>
          <p className="rev-card__data p-small">{reviewDate}</p>
        </div>
      </div>

      <p className="rev-card__text p-regular">{review.text}</p>
    </div>
  )
}
