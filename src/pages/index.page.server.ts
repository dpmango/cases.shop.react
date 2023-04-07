import { PageContextServer } from '~/renderer/types'

export async function onBeforeRender(pageContext: PageContextServer) {
  const PRELOADED_STATE = {
    sessionState: {
      id: 4,
      name: 'test',
    },
  }

  return {
    pageContext: {
      PRELOADED_STATE,
    },
  }
}

export const passToClient = ['PRELOADED_STATE']
