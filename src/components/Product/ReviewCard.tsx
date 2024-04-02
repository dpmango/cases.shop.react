import dayjs from 'dayjs'
import { useMemo } from 'react'

import { IReviewDto } from '@/core/interface/Homepage'

interface IReviewCard extends IReviewDto {}

export const ReviewCard: React.FC<IReviewCard> = ({ date, ava, nick, text }) => {
  const reviewDate = useMemo(() => {
    return dayjs.unix(date).format('DD MMM YYYY в HH:mm')
  }, [date])

  const avatarExists = ava !== 'https://shopcore.ru/'

  return (
    <div className="rewiews__el">
      <div className="rewiews-el content-bg">
        <div className="rewiews-el__top">
          {avatarExists && <img className="rewiews-el__img" loading="lazy" src={ava} alt="" />}
          <div className="rewiews-el__top-body">
            <div className="rewiews-el__name title-cat">{nick}</div>
            <div className="rewiews-el__date text-date">{reviewDate}</div>
          </div>
        </div>
        <div className="rewiews-el__body">
          <div className="rewiews-el__text text-info">{text}</div>
        </div>
      </div>
    </div>
  )
}
