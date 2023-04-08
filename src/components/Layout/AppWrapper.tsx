import { LayoutMain } from '@c/Layout'
import React, { useEffect } from 'react'

import type { PageContext } from '~/renderer/types'
import { PageContextProvider } from '~/src/components/Layout/Page/PageContext'

export const AppWrapper = ({
  children,
  pageContext,
}: {
  children: React.ReactNode
  pageContext: PageContext
}) => {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <LayoutMain>{children}</LayoutMain>
      </PageContextProvider>
    </React.StrictMode>
  )
}
