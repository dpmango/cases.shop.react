import { PageSlider } from '@c/Content'
import { PageDecoration } from '@c/Layout'
import { Categories, ProductCard } from '@c/Product'
import React, { useEffect } from 'react'

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
      <div className="container">
        <PageSlider />

        <Categories />
      </div>
    </PageDecoration>
  )
}
