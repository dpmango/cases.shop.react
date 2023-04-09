import { initialState } from '@/core/store/session.store'
import { PageContextServer } from '~/renderer/types'

export async function onBeforeRender(pageContext: PageContextServer) {
  const PRELOADED_STATE = {
    sessionState: {
      ...initialState,
      id: 'MurcciTGBot',
    },
  }

  return {
    pageContext: {
      PRELOADED_STATE,
    },
  }
}

export const passToClient = ['PRELOADED_STATE']
