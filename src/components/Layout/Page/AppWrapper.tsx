import React, { useEffect } from 'react'

import { LayoutMain } from '@/components/Layout'
import type { PageContext } from '~/renderer/types'
import { PageContextProvider } from '~/src/components/Layout/Page/PageContext'

export const AppWrapper = ({
  children,
  pageContext,
}: {
  children: ReactSlot
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
