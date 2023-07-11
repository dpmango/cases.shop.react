import { useNavigate, useParams } from 'react-router'

import { PageDecoration } from '@/components/Layout'
import { usePageContext } from '@/components/Layout'
import { OrderModal } from '@/components/Order'
import { ProductPage } from '@/components/Product'
import { UiLoader } from '@/components/Ui'
import type { IProductFullDto } from '@/core/interface/Product'

export const documentProps = {
  title: '[Товар]',
  description: 'Описание страницы',
}

export const Page: React.FC = () => {
  const [product, setProduct] = useState<IProductFullDto | null>(null)
  const { isHydrated } = useAppSelector((state) => state.uiState)
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const { reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const pageContext = usePageContext()
  const routeParams = useParams()
  const renderProduct = product || pageContext.productData

  useEffect(() => {
    if (!isHydrated) return

    if (reviews === null) {
      dispatch(getReviewsThunk({ shopId, limit: 30 }))
    }

    const fetchProduct = async () => {
      const { data, error } = await getProduct({
        shopId,
        id: routeParams.id as string,
      })

      if (data) {
        setProduct(data)
      } else {
        navigate('/')
      }
    }

    fetchProduct()
  }, [routeParams.id])

  // @ts-ignore
  if (isHydrated && !product && pageContext.productData === false) {
    navigate('/')
  }

  return (
    <PageDecoration documentProps={{ title: renderProduct?.name }} sectionClassName="product">
      {renderProduct ? (
        <ProductPage product={renderProduct} />
      ) : (
        <UiLoader theme="page" loading={true} />
      )}

      <OrderModal />
    </PageDecoration>
  )
}
