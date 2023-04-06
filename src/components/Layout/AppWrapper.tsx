import { LayoutMain } from '@c/Layout'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

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
        <PageContextProvider pageContext={pageContext}>
          <LayoutMain>{children}</LayoutMain>
        </PageContextProvider>
      </Provider>
    </React.StrictMode>
  )
}
