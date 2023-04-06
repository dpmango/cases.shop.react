/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AppWrapper } from '../src/components/Layout'
import type { PageContextClient } from './types'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  hydrateRoot(
    document.getElementById('page-view')!,

    <BrowserRouter>
      <AppWrapper pageContext={pageContext}>
        <Page {...pageProps} />
      </AppWrapper>
    </BrowserRouter>,
  )
}

export const clientRouting = true

export { render }
