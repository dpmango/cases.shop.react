import { LayoutMain } from '@c/Layout'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'

import { PageContextProvider } from '@/components/Layout/PageContext'
import type { PageContext } from '~/renderer/types'

export const AppWrapper = ({
  children,
  pageContext,
}: {
  children: React.ReactNode
  pageContext: PageContext
}) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RecoilRoot>
          <PageContextProvider pageContext={pageContext}>
            <LayoutMain>{children}</LayoutMain>
          </PageContextProvider>
        </RecoilRoot>
      </Provider>
    </React.StrictMode>
  )
}
