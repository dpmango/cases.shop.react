import '@/assets/styles/app.scss'
import 'virtual:svg-icons-register'

import { LayoutFooter, LayoutHeader, usePageContext } from '@c/Layout'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { PhotoProvider } from 'react-photo-view'
import { Link, Route, Routes } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { initializeApp } from '@/core/api/session.api'
import main from '@/core/storage/atoms/main'
import { getUser } from '@/core/storage/selectors/main'
import { Page as HomePage } from '@/pages/index.page'
import { Page as RestPage } from '@/pages/rest.page'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mainCoil, updateMainCoil] = useRecoilState(main)
  const [, setProfile] = useRecoilState(getUser)

  const location = usePageContext()

  const getInitdata = async () => {
    const { data } = await initializeApp()

    if (data) {
      // updateMainCoil({
      //   ...mainCoil,
      //   ...data,
      // })
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token')

    if (accessToken) {
      const fetchData = async () => {
        const { data } = await api(`profile`, {})
        if (data) {
          setProfile(data)
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
        <title>{mainCoil.name}</title>
      </Helmet>

      <PhotoProvider>
        <div className={'body-wrap'}>
          <LayoutHeader />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<RestPage />} />
          </Routes>
          <LayoutFooter />
        </div>
      </PhotoProvider>
    </>
  )
}

export default Layout
