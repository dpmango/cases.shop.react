import Cookies from 'js-cookie'
import { FetchError, FetchOptions, ofetch } from 'ofetch'

import type { IError } from '@/core/interface/Api'

interface IRequestOptions {
  method?: string
  body?: { [key: string]: any }
  headers?: { [key: string]: string }
  params?: { [key: string]: string }
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

    if (accessToken) {
      requestOptions.headers = {
        ...requestOptions.headers,
        Authorization: `${accessToken}`,
      }
    }

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

    const { data, msg, status, errorCode, ...raw } = await ofetch(requestUrl, requestOptions)

    console.log(`👌 fetch ${url} ${JSON.stringify(requestOptions.params)}`, data)

    if (status) {
      return { data, raw, message: msg, error: null }
    } else {
      const fetchWithNoResponse = new Error(msg)
      // @ts-ignore
      fetchWithNoResponse.status = errorCode
      throw fetchWithNoResponse
    }
  } catch (err: any) {
    let errMessage = err?.data?.message || err?.message || ''

    if (!errMessage) {
      switch (err?.status) {
        case 4:
          errMessage = 'Ошибка сервера'
          break
        case 5:
          errMessage = 'Ошибка авторизации'
          break
        case 500:
          errMessage = 'Ошибка сервера'
          break
        case 403:
          errMessage = 'Ошибка авторизации'
          break
      }
    }

    if (err?.status === 5) {
      const { data } = await userAuthRefresh({ token: localStorage.getItem('refresh_token') })

      if (data) {
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)

        return await api(url, { method, body, params, headers })
      } else {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')

        window && window.location.reload()
      }
    }

    const error: IError = {
      code: err?.status || 500,
      message: errMessage,
      raw: err,
    }

    console.log('❌ Request Error', error)

    return { data: null, message: null, error }
  }
}
