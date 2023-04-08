import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { PageDecoration } from '@/components/Layout'
import { OrderModal } from '@/components/Order'
import { ProductPage } from '@/components/Product'
import { UiLoader } from '@/components/Ui'

export const documentProps = {
  title: '[Товар]',
  description: 'Описание страницы',
}

export const Page: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const { items, reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (reviews === null && shopId) {
      dispatch(getReviewsThunk({ shopId }))
    }
    if (items === null && shopId) {
      dispatch(getProductThunk({ shopId }))
    }
  }, [shopId])

  useEffect(() => {
    if (items !== null) {
      const allItems = Object.values(items).flat()
      const item = allItems.find((el) => el.id === params.id)

      setSelectedItem(item)

      if (!item) {
        navigate('/404', { replace: true })
      }
    }
  }, [items, params?.id])

  return (
    <PageDecoration sectionClassName="product">
      {selectedItem ? (
        <ProductPage product={selectedItem} />
      ) : (
        <UiLoader theme="page" loading={true} />
      )}

      <OrderModal />
    </PageDecoration>
  )
}