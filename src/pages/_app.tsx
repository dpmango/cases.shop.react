import '@/assets/styles/app.scss'

import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { getStore } from '@/core/store'

function APP({ Component, pageProps }: any) {
  const store = getStore(pageProps.PRELOADED_STATE || {})

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
      </Head>

      <NextNProgress />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

export default APP
