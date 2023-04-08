import '@/assets/styles/app.scss'
import 'virtual:svg-icons-register'

import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LayoutFooter, LayoutHeader } from '@/components/Layout'
import { SharedModals } from '@/components/Layout'
import { initializeApp } from '@/core/api/session.api'
import { Page as FaqPage } from '~/src/pages/faq.page.client'
// import { Page as RestPage } from '~/rest.page'
import { Page as HomePage } from '~/src/pages/index.page.client'
import { Page as ProductPage } from '~/src/pages/product.page.client'
import { Page as ReviewPage } from '~/src/pages/reviews.page.client'

export const Layout = ({ children }: { children: ReactSlot }) => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  // const location = usePageContext()

  useEffect(() => {
    dispatch(startAppThunk({ shopId }))

    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      dispatch(getProfileThunk())
    }
  }, [])

  return (
    <div className={'page'}>
      <LayoutHeader />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        {/* <Route path="*" element={<RestPage />} /> */}
      </Routes>
      <LayoutFooter />
      <SharedModals />
    </div>
  )
}

export default Layout
