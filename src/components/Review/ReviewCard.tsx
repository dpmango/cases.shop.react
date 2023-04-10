import dayjs from 'dayjs'

import { IReviewDto } from '@/core/interface/Review'

export const ReviewCard = (review: IReviewDto) => {
  const fullAvatarPath = useMemo(() => {
    if (!review.ava) return ''
    return `${import.meta.env.VITE_ASSETS_URL}${review.ava}`
  }, [])

  const reviewDate = useMemo(() => {
    return dayjs(review.date).format('MM.DD.YYYY')
  }, [])

  return (
    <div className="rev-card">
      <div className="rev-card__top">
        <div className="rev-card__ava">
          <img src={fullAvatarPath} alt={review.nick} loading="lazy" />
        </div>

        <div className="rev-card__content">
          <p className="rev-card__name h5-title">{review.nick}</p>
          <p className="rev-card__data p-small">{reviewDate}</p>
        </div>
      </div>

      <p className="rev-card__text p-small">{review.text}</p>
    </div>
  )
}
