import { LayoutMain } from '@/components/Layout'
import type { PageContext } from '~/renderer/types'
import { PageContextProvider } from '~/src/components/Layout/Page/PageContext'

export const PageConsumer = ({
  children,
  pageContext,
}: {
  children: ReactSlot
  pageContext: PageContext
}) => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <LayoutMain>{children}</LayoutMain>
    </PageContextProvider>
  )
}
