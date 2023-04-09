import { createContext } from 'react'

import type { PageContext } from '~/renderer/types'

const Context = createContext<PageContext>(undefined as any)

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext
  children: React.ReactNode
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}

export { PageContextProvider }
export { usePageContext }
