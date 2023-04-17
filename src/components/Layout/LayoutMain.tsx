import '@/assets/styles/app.scss'
import 'virtual:svg-icons-register'

import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { LayoutFooter, LayoutHeader } from '@/components/Layout'
import { SharedModals } from '@/components/Layout'
import { Page as FaqPage } from '~/src/pages/faq/index.page'
import { Page as HomePage } from '~/src/pages/index.page'
import { Page as ProductPage } from '~/src/pages/product/index.page'
import { Page as RestPage } from '~/src/pages/rest.page'
import { Page as ReviewPage } from '~/src/pages/reviews/index.page'

export const Layout = ({ children }: { children: ReactSlot }) => {
  const { id: shopId, settings } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  const location = useLocation()

  useEffect(() => {
    // dispatch(startAppThunk({ shopId }))
    dispatch(setHydrated(true))

    const accessToken = Cookies.get('access_token')
    // accessToken =
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJzdG9yZV91c2VyIiwidXNlcl9pZCI6IjYwNzMyMjc3NzciLCJzaG9wX2lkIjoiS2htZWxldnNrb3kiLCJpc19hZG1pbiI6IjEiLCJleHAiOjE2ODE0MDkxNTksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzI3LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzI3LyJ9.2NEsY_7cfeA5BK95nKq1HeU44oPVFxNLgm4xcAR0y0Y'

    if (accessToken) {
      dispatch(getProfileThunk())
    }
  }, [])

  useEffect(() => {
    scrollPageToTop()
  }, [location.pathname])

  return (
    <div className={'page'}>
      <LayoutHeader />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="*" element={<RestPage />} />
      </Routes>
      <LayoutFooter />
      <SharedModals />
    </div>
  )
}

export default Layout
