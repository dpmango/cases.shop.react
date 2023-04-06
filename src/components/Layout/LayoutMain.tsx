import '@/assets/styles/app.scss'
import 'virtual:svg-icons-register'

import { LayoutFooter, LayoutHeader, usePageContext } from '@c/Layout'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { PhotoProvider } from 'react-photo-view'
import { Link, Route, Routes } from 'react-router-dom'

import { initializeApp } from '@/core/api/session.api'
import { Page as FaqPage } from '@/pages/faq/faq.page'
import { Page as HomePage } from '@/pages/index.page'
import { Page as ProductPage } from '@/pages/product/product.page'
import { Page as RestPage } from '@/pages/rest.page'
import { Page as ReviewPage } from '@/pages/reviews/reviews.page'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { name } = useAppSelector((state) => state.sessionState)

  const dispatch = useAppDispatch()

  const location = usePageContext()

  const getInitdata = async () => {
    const { data } = await initializeApp()

    if (data) {
      Object.keys(data).forEach((key) => {
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
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>

      <PhotoProvider>
        <div className={'body-wrap'}>
          <LayoutHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="*" element={<RestPage />} />
          </Routes>
          <LayoutFooter />
        </div>
      </PhotoProvider>
    </>
  )
}

export default Layout
