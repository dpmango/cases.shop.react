import { useEffect } from 'react'

import { AtomHeading } from '@/components/Atom'
import { PageDecoration } from '@/components/Layout'
import { ReviewCard } from '@/components/Review'
import { SvgIcon, UiButton, UiLoader } from '@/components/Ui'

export const documentProps = {
  title: 'Отзывы',
  description: 'Описание страницы',
}

export const Page = () => {
  const { isHydrated } = useAppSelector((state) => state.uiState)
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const { reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isHydrated) return

    if (reviews === null) {
      dispatch(getReviewsThunk({ shopId }))
    }
  }, [])

  return (
    <PageDecoration sectionClassName="reviews">
      <div className="container _narrow">
        <AtomHeading className="reviews__head" useBack={true}>
          <h1 className="h1-title">ОТЗЫВЫ</h1>
        </AtomHeading>

        <div className="reviews__wrapper">
          <div className="reviews__box">
            {reviews ? (
              reviews.map((el, key) => <ReviewCard key={key} {...el} />)
            ) : (
              <UiLoader theme="page" loading={true} />
            )}
          </div>

          {/* <div className="reviews__more">
            <UiButton>Загрузить больше</UiButton>
          </div> */}
        </div>
      </div>
    </PageDecoration>
  )
}
