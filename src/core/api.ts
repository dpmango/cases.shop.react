import Cookies from 'js-cookie'
import { FetchError, FetchOptions, ofetch } from 'ofetch'

interface IRequestOptions {
  method?: string
  body?: { [key: string]: any }
  headers?: { [key: string]: string }
  params?: { [key: string]: string }
}

interface IError {
  status: number
  message: string
  raw: any
}

export const api = async (
  url: string,
  { method = 'GET', body, params, headers }: IRequestOptions,
) => {
  try {
    const accessToken = localStorage.getItem('access_token')

    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json' as string,
      },
      body,
      params,
    } as FetchOptions

    // if (accessToken) {
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: `Bearer ${accessToken}`,
    }
    // }

    if (headers) {
      requestOptions.headers = {
        ...requestOptions.headers,
        ...headers,
      }
    }

    let requestUrl = `${import.meta.env.VITE_BACKEND_URL}${url}`
    if (url.startsWith('http')) {
      requestUrl = url
    }

    const { data, message, metadata, ...raw } = await ofetch(requestUrl, requestOptions)

    console.log(`👌 fetch ${url} ${JSON.stringify(requestOptions.params)}`, data)

    if (!data.response && data?.errorCode === 5) {
      const response = await api('auth', {
        method: 'PATCH',
        body: {
          token: localStorage.getItem('refresh_token'),
        },
      })

      if (data.response) {
        localStorage.setItem('access_token', data.data.access_token)
        localStorage.setItem('refresh_token', data.data.refresh_token)

        // return await api(endpoint, method, params)
      } else {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')

        window.location.reload()
      }
    }

    return { data, metadata, raw, message, error: null }
  } catch (err: any) {
    let errMessage = err?.data?.message || ''

    if (!errMessage) {
      switch (err?.status) {
        case 500:
          errMessage = 'Ошибка сервера'
          break
        case 403:
          errMessage = 'Ошибка авторизации'
          break
      }
    }

    const error: IError = {
      status: err?.status || 500,
      message: errMessage,
      raw: err,
    }

    console.log('❌ Request Error', error)

    return { data: null, metadata: null, message: null, error }
  }
}
