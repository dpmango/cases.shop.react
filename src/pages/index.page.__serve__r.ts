import { initialProductState } from '@/core/store/product.store'
import { initialSessionState } from '@/core/store/session.store'
import { PageContextServer } from '~/renderer/types'

export async function onBeforeRender(pageContext: PageContextServer) {
  console.log('server::index')

  const { data: initData } = await initializeApp({ shopId: import.meta.env.VITE_SHOP_ID })

  const { data } = await getProducts({
    shopId: import.meta.env.VITE_SHOP_ID,
  })

  const PRELOADED_STATE = {
    sessionState: {
      ...covertInitDto(initialSessionState, initData),
    },
    productState: {
      ...initialProductState,
      items: data || [],
    },
  }

  return {
    pageContext: {
      PRELOADED_STATE,
    },
  }
}

export const passToClient = ['PRELOADED_STATE']
