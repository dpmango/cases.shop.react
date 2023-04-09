// See https://vite-plugin-ssr.com/data-fetching

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server'

import { PageConsumer } from '../src/components/Layout'
import { getStore } from '../src/core/store'
import type { PageContextServer } from './types'

const passToClient = ['pageProps', 'urlPathname', 'PRELOADED_STATE']

// export async function onBeforeRender(pageContext: PageContextServer) {
//   console.log('server::default onBeforeRender')
//   return null
// }

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, urlPathname, PRELOADED_STATE } = pageContext
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')

  const store = getStore(PRELOADED_STATE)
  const pageHtml = ReactDOMServer.renderToString(
    <StaticRouter location={urlPathname}>
      <Provider store={store}>
        <PageConsumer pageContext={pageContext}>
          <Page {...pageProps} />
        </PageConsumer>
      </Provider>
    </StaticRouter>,
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta name="description" content="${desc}" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <title>${title}</title>
      </head>
      <body class="theme-main">
        <div id="react-app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}

export { render }
export { passToClient }
