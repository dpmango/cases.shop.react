import type {
  PageContextBuiltIn,
  // When using Client Routing https://vite-plugin-ssr.com/clientRouting
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
  // When using Server Routing
  // PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
} from 'vite-plugin-ssr/types'

import type { IError } from '~/src/core/interface/Api'
import type { IProductFullDto } from '~/src/core/interface/Product'
import type { RootState } from '~/src/core/store'

type Page = (pageProps: PageProps) => React.ReactElement
type PageProps = object

export type PageContextCustom = {
  Page: Page
  _pageId: string
  pageProps?: PageProps
  urlPathname: string
  PRELOADED_STATE: Partial<RootState>
  productData: IProductFullDto | null
  redirectTo?: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer

export interface IPromiseFactory {
  name: string
  resolver: Promise<{ data: any; error: IError | null }>
  errorRouter?: {
    redirectTo?: string
    fatal?: boolean
  }
}

export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }
