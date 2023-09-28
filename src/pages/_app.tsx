import '@/assets/styles/app.scss'

import Head from 'next/head'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { LayoutHeader } from '@/components/Layout'
import { store } from '@/core/store'

// const theme = createTheme({
//   type: 'light',
//   theme: {
//     colors: {
//       primary: '#4676DA',
//     },
//   },
// });

function APP({ Component, pageProps }: any) {
  useEffect(() => {
    // console.log('app render')
  }, [])

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

export default APP
// export default appWithTranslation(FlomniApp)
