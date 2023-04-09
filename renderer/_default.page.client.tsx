/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { PageConsumer } from '../src/components/Layout'
import { getStore } from '../src/core/store'
import type { PageContextClient } from './types'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps, PRELOADED_STATE } = pageContext
  const store = getStore(PRELOADED_STATE)
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')

  // SSR mode
  hydrateRoot(
    document.getElementById('react-app')!,

    <BrowserRouter>
      <Provider store={store}>
        <PageConsumer pageContext={pageContext}>
          <Page {...pageProps} />
        </PageConsumer>
      </Provider>
    </BrowserRouter>,
  )

  // SPA mode
  // const reactRoot = createRoot(document.getElementById('react-app')!)

  // reactRoot.render(
  //   <BrowserRouter>
  //     <Provider store={store}>
  //       <PageConsumer pageContext={pageContext}>
  //         <Page {...pageProps} />
  //       </PageConsumer>
  //     </Provider>
  //   </BrowserRouter>,
  // )
}

export const clientRouting = true
export const hydrationCanBeAborted = true

export { render }
