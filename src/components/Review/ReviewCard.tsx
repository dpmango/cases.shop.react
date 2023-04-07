import React, { useEffect } from 'react'

import { IReviewDto } from '@/core/interface/Review'

export const ReviewCard = (review: IReviewDto) => {
  return (
    <div className="rev__item">
      <div className="rev__top d-flex">
        <img src={review.photo_url} alt="" className="rev__ava" />
        <div className="rev__content">
          <p className="rev__name">{review.nick}</p>
          <p className="rev__data">
            {new Date(review.date).toLocaleDateString('ru', {
              year: `numeric`,
              month: `long`,
              day: `numeric`,
            })}
          </p>
        </div>
      </div>
      <p className="rev__text">{review.text}</p>
    </div>
  )
}
