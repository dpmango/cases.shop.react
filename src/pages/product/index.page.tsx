import { useNavigate, useParams } from 'react-router'

import { PageDecoration } from '@/components/Layout'
import { usePageContext } from '@/components/Layout'
import { OrderModal } from '@/components/Order'
import { ProductPage } from '@/components/Product'
import { UiLoader } from '@/components/Ui'

export const documentProps = {
  title: '[Товар]',
  description: 'Описание страницы',
}

export const Page: React.FC = () => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const { reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  const pageContext = usePageContext()

  // useEffect(() => {
  //   if (reviews === null) {
  //     dispatch(getReviewsThunk({ shopId }))
  //   }
  // }, [shopId])

  return (
    <PageDecoration sectionClassName="product">
      {pageContext.productData ? (
        <ProductPage product={pageContext.productData} />
      ) : (
        <UiLoader theme="page" loading={true} />
      )}

      <OrderModal />
    </PageDecoration>
  )
}
