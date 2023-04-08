import React, { useEffect } from 'react'

import { IReviewDto } from '@/core/interface/Review'

export const ReviewCard = (review: IReviewDto) => {
  const [hideAvatar, setHideAvatar] = useState(false)

  return (
    <div className="rev-card">
      <div className="rev-card__top">
        <div className="rev-card__ava">
          {!hideAvatar && (
            <img
              src={review.ava}
              alt={review.nick}
              onError={() => {
                setHideAvatar(true)
              }}
            />
          )}
        </div>

        <div className="rev-card__content">
          <p className="rev-card__name">{review.nick}</p>
          <p className="rev-card__data">
            {new Date(review.date).toLocaleDateString('ru', {
              year: `numeric`,
              month: `long`,
              day: `numeric`,
            })}
          </p>
        </div>
      </div>
      <p className="rev-card__text">{review.text}</p>
    </div>
  )
}