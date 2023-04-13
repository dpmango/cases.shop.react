import cns from 'classnames'

import { PageDecoration } from '@/components/Layout'
import { ProductsSlider } from '@/components/Product'
import { Categories, ProductCard } from '@/components/Product'
import { UiLoader } from '@/components/Ui'

export const documentProps = {
  title: 'Главная',
  description: 'Описание страницы',
}

export const Page: React.FC = () => {
  const [ready, setReady] = useState(false)

  const { id: shopId, settings } = useAppSelector((state) => state.sessionState)
  const { items } = useAppSelector((state) => state.productState)
  const { isHydrated } = useAppSelector((state) => state.uiState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setReady(true)
    if (!isHydrated) return

    if (items === null) {
      dispatch(getProductsThunk({ shopId }))
    }
  }, [])

  return (
    <PageDecoration
      sectionClassName={cns('home', settings.logo && '_has-logo', !ready && '_loading')}
    >
      <img src={settings.background_image} alt="" className="fire home__fire" />
      <UiLoader theme="page" loading={!ready} />

      <div className="container">
        {settings.logo && (
          <div className="home__logo">
            <img src={settings.logo} alt="logo" />
          </div>
        )}

        <ProductsSlider />
        <Categories />
      </div>
    </PageDecoration>
  )
}
