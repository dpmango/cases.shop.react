import { PageDecoration } from '@/components/Layout'
import { ProductsSlider } from '@/components/Product'
import { Categories, ProductCard } from '@/components/Product'
import { UiLoader } from '@/components/Ui'

export const documentProps = {
  title: 'Главная',
  description: 'Описание страницы',
}

export const Page: React.FC = () => {
  const { id: shopId, settings } = useAppSelector((state) => state.sessionState)
  const { items } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (items === null) {
      dispatch(getProductThunk({ shopId }))
    }
  }, [shopId])

  return (
    <PageDecoration sectionClassName="home">
      <img src={settings.background_image} alt="" className="home__fire" />
      <UiLoader theme="page" loading={!items} />

      <div className="container">
        {/* <ProductsSlider fullWidth={false} /> */}
        <ProductsSlider />
        <Categories />
      </div>
    </PageDecoration>
  )
}
