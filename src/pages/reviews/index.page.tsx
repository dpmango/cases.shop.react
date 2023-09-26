import { useEffect } from 'react'

import { AtomHeading } from '@/components/Atom'
import { PageDecoration } from '@/components/Layout'
import { ReviewCard } from '@/components/Review'
import { SvgIcon, UiButton, UiLoader } from '@/components/Ui'

export const documentProps = {
  title: 'Отзывы',
  description: 'Описание страницы',
}

const PAGE_LIMIT = 30

export const Page = () => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [moreAvailable, setMoreAvailable] = useState(true)

  const { isHydrated } = useAppSelector((state) => state.uiState)
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const { reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  const handleLoadMore = async () => {
    setLoading(true)
    const { payload }: { payload: any } = await dispatch(
      getReviewsThunk({ shopId, limit: PAGE_LIMIT, offset: page * PAGE_LIMIT }),
    )
    setLoading(false)

    if (payload.data) {
      setPage(page + 1)
    }

    if (payload.data.length && payload.data.length < PAGE_LIMIT) {
      setMoreAvailable(false)
    }
  }

  useEffect(() => {
    if (!isHydrated) return

    if (reviews === null) {
      dispatch(getReviewsThunk({ shopId, limit: PAGE_LIMIT }))
    }
  }, [])

  return (
    <PageDecoration documentProps={documentProps} sectionClassName="reviews">
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

          {moreAvailable && (
            <div className="reviews__more" onClick={handleLoadMore}>
              <UiButton loading={loading}>Загрузить больше</UiButton>
            </div>
          )}
        </div>
      </div>
    </PageDecoration>
  )
}
