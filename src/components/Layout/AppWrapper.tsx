import { LayoutMain } from '@c/Layout'
import React, { useEffect } from 'react'

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
      <PageContextProvider pageContext={pageContext}>
        <LayoutMain>{children}</LayoutMain>
      </PageContextProvider>
    </React.StrictMode>
  )
}
