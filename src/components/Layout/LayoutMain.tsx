import '@/assets/styles/app.scss'
import 'virtual:svg-icons-register'

import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LayoutFooter, LayoutHeader } from '@/components/Layout'
import { SharedModals } from '@/components/Layout'
import { Page as FaqPage } from '~/src/pages/faq/index.page'
import { Page as HomePage } from '~/src/pages/index.page'
import { Page as ProductPage } from '~/src/pages/product/index.page'
import { Page as RestPage } from '~/src/pages/rest.page'
import { Page as ReviewPage } from '~/src/pages/reviews/index.page'

export const Layout = ({ children }: { children: ReactSlot }) => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  // const location = usePageContext()

  useEffect(() => {
    // dispatch(startAppThunk({ shopId }))
    dispatch(setHydrated(true))

    const accessToken = Cookies.get('access_token')
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
        <Route path="*" element={<RestPage />} />
      </Routes>
      <LayoutFooter />
      <SharedModals />
    </div>
  )
}

export default Layout
