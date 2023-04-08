import '@/assets/styles/app.scss'
import 'virtual:svg-icons-register'

import { LayoutFooter, LayoutHeader, usePageContext } from '@c/Layout'
import React, { useEffect } from 'react'
import { PhotoProvider } from 'react-photo-view'
import { Route, Routes } from 'react-router-dom'

import { SharedModals } from '@/components/Layout'
import { initializeApp } from '@/core/api/session.api'
import { Page as FaqPage } from '@/pages/faq/faq.page'
import { Page as HomePage } from '@/pages/index.page'
import { Page as ProductPage } from '@/pages/product/product.page'
import { Page as RestPage } from '@/pages/rest.page'
import { Page as ReviewPage } from '@/pages/reviews/reviews.page'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  const location = usePageContext()

  const getInitdata = async () => {
    const { data } = await initializeApp({ shopId })

    if (data) {
      Object.keys(data).forEach((key) => {
        // @ts-ignore
        const dataValue = data[key]
        dispatch(updateAnyState({ key, data: dataValue }))
      })
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token')

    if (accessToken) {
      const fetchData = async () => {
        const { data } = await api(`profile`, {})
        if (data) {
          dispatch(updateAnyState({ key: 'profile', data }))
        }
      }
      fetchData()
    }
  }, [])

  useEffect(() => {
    getInitdata()
  }, [location])

  return (
    <PhotoProvider>
      <div className={'page'}>
        <LayoutHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="*" element={<RestPage />} />
        </Routes>
        <LayoutFooter />
        <SharedModals />
      </div>
    </PhotoProvider>
  )
}

export default Layout
