import '@/assets/styles/app.scss'

import Head from 'next/head'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { store } from '@/core/store'

function APP({ Component, pageProps }: any) {
  useEffect(() => {
    // console.log('app render')
  }, [])

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
      </Head>

      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

export default APP
