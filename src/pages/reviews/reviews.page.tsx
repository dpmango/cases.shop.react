import { PageDecoration } from '@c/Layout'
import { ReviewCard } from '@c/Review'
import { SvgIcon, UiButton, UiLink } from '@c/Ui'
import { useEffect } from 'react'

export const documentProps = {
  title: 'Отзывы',
  description: 'Описание страницы',
}

export const Page = () => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const { reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (reviews === null && shopId) {
      dispatch(getReviewsThunk({ shopId }))
    }
  }, [shopId])

  return (
    <PageDecoration sectionClassName="reviews">
      <div className="container">
        <div className="reviews__head head">
          <UiLink href="/" className="head__back">
            <SvgIcon name="caret-left" />
            <span>НА ГЛАВНУЮ</span>
          </UiLink>
          <div className="h1-title head__title">ОТЗЫВЫ</div>
        </div>

        <div className="reviews__wrapper">
          <div className="reviews__box">
            {reviews && reviews.map((el, key) => <ReviewCard key={key} {...el} />)}
          </div>

          <div className="reviews__more">
            <UiButton>Загрузить больше</UiButton>
          </div>
        </div>
      </div>
    </PageDecoration>
  )
}
