// See https://vite-plugin-ssr.com/data-fetching
import Cookies from 'js-cookie'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server'

import { PageConsumer } from '@/components/Layout'
import type { IError, PromiseSettledResult } from '@/core/interface/Api'

import type { IPromiseFactory, PageContextServer } from './types'

const passToClient = ['pageProps', 'productData', 'PRELOADED_STATE']

export async function onBeforeRender(pageContext: PageContextServer) {
  console.log('server renderer')
  const { isClientSideNavigation, urlPathname, _pageId, routeParams } = pageContext
  if (isClientSideNavigation) return { pageContext: {} }

  const DEV_perf_start = performance.now()
  const accessToken = Cookies.get('access_token')

  let parsedSiteHost = pageContext.urlParsed.origin?.replace('https://', '') || 'donatfun.ru'
  if (parsedSiteHost?.includes('localhost')) {
    parsedSiteHost = 'nobody.su'
  }

  const {
    data: { id: shopId },
  } = await getWhois({
    site: parsedSiteHost,
  })

  const PRELOADED_STATE = {
    sessionState: {
      ...initialSessionState,
      id: shopId,
    },
    productState: {
      ...initialProductState,
    },
  }
  let productData

  // Управление запросами страниц (розолвится в PRELOADED_STATE)
  const promisesToBeFetched = [
    {
      name: 'init',
      resolver: initializeApp({ shopId, site: parsedSiteHost }),
      errorRouter: {
        fatal: true,
      },
    },
    {
      name: 'orders',
      resolver: getOrders({ shopId }),
    },
    {
      name: 'products',
      resolver: getProducts({ shopId }),
    },
  ] as IPromiseFactory[]
  // isClientSideNavigation

  // Главная
  // if (_pageId.includes('pages/index')) {
  //   // promisesToBeFetched.push({
  //   //   name: 'products',
  //   //   resolver: getProducts({ shopId }),
  //   // })
  // }

  // Получение товара
  if (_pageId.includes('pages/product')) {
    promisesToBeFetched.push({
      name: 'product',
      resolver: getProduct({
        shopId,
        id: pageContext.routeParams.id,
      }),
      errorRouter: {
        redirectTo: '/404',
      },
    })
    promisesToBeFetched.push({
      name: 'reviews',
      resolver: getReviews({
        shopId,
        limit: 30,
      }),
    })
  }

  // Отзывы
  if (_pageId.includes('pages/reviews')) {
    promisesToBeFetched.push({
      name: 'reviews',
      resolver: getReviews({
        shopId,
        limit: 30,
      }),
    })
  }

  // Выполнение запросов в SSR контексте
  if (promisesToBeFetched.length) {
    const allSettled = (await Promise.allSettled(
      promisesToBeFetched.map((x) => x.resolver),
    )) as PromiseSettledResult<any>[]

    allSettled.forEach((result, idx) => {
      const { name, errorRouter } = promisesToBeFetched[idx]

      const errHandler = (error?: IError) => {
        if (errorRouter) {
          console.log('should error')
          if (errorRouter.redirectTo) {
            // redirectTo
          }
        }

        if (name === 'product') {
          productData = false
        }
      }

      // console.log(name, { result })
      if (result.status === 'rejected') errHandler()
      if (result.status === 'fulfilled' && result.value) {
        const { data, error } = result.value

        if (error) {
          errHandler(error)
          return
        }

        switch (name) {
          case 'init':
            PRELOADED_STATE.sessionState = {
              ...covertInitDto(initialSessionState, data),
              id: shopId,
            }
            break
          case 'orders':
            PRELOADED_STATE.sessionState = {
              ...PRELOADED_STATE.sessionState,
              lastPurchases: data,
            }
            break
          case 'products':
            PRELOADED_STATE.productState = {
              ...PRELOADED_STATE.productState,
              items: data,
            }
            break
          case 'product':
            productData = data || false
            break
          case 'reviews':
            PRELOADED_STATE.productState = {
              ...PRELOADED_STATE.productState,
              reviews: data,
            }
            break
          default:
            break
        }
      }
    })
  }

  const DEV_perf_end = performance.now()
  console.log(
    `🧙‍♂️ server:${urlPathname}${accessToken ? ' (accessToken) ' : ''} done in ${(
      DEV_perf_end - DEV_perf_start
    ).toFixed(2)} ms`,
  )

  return {
    pageContext: {
      PRELOADED_STATE,
      productData,
    },
  }
}

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, urlPathname, productData, PRELOADED_STATE } = pageContext
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')

  if (pageContext.redirectTo) {
    return {
      documentHtml: null,
      pageContext: {
        redirectTo: pageContext.redirectTo,
      },
    }
  }

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
  let title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const productTitle = documentProps?.title === '[Товар]'
  if (productData && productTitle) {
    title = productData.name
  }

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta name="description" content="${desc}" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?Inter:wght@500;600;700;500i&family=Radio+Canada:wght@600&family=Raleway:wght@600;700;800;900&display=swap" rel="stylesheet"/>

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
