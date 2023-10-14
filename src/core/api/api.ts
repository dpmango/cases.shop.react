import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { $Fetch, FetchError, FetchOptions, ofetch } from 'ofetch'

import { userAuthRefresh } from '@/core/api/session.api'
import type { IError } from '@/core/interface/Api'

interface IRequestOptions {
  method?: string
  body?: { [key: string]: any }
  headers?: { [key: string]: string }
  params?: { [key: string]: string }
}

interface IApiResult {
  status: boolean
  data: any | null
  raw: any | null
  error: any | null
  message: string | null
}

let SHOPID = ''
export const setShopID = (id: string) => (SHOPID = id)

export const api = async (
  url: string,
  { method = 'GET', body, params, headers }: IRequestOptions,
): Promise<IApiResult> => {
  try {
    const accessToken = getCookie('access_token')
    const shopIdCookie = getCookie('SHOP-ID')

    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json' as string,
        'X-SHOP-ID': shopIdCookie || SHOPID,
      },
      body,
      params,
    } as FetchOptions

    if (accessToken) {
      requestOptions.headers = {
        ...requestOptions.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }

    if (headers) {
      requestOptions.headers = {
        ...requestOptions.headers,
        ...headers,
      }
    }

    let requestUrl = `${process.env.BACKEND_URL}${url}`
    if (url.startsWith('http')) {
      requestUrl = url
    }

    const DEV_perf_start = performance.now()

    const { data, msg, status, errorCode, ...raw } = await ofetch(requestUrl, requestOptions)
    const DEV_perf_end = performance.now()

    console.log(`👌 fetch ${url} in ${(DEV_perf_end - DEV_perf_start).toFixed(2)} ms`, data)

    if (status === true || status === undefined) {
      return { data, raw, message: msg, status, error: null }
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

    if (err?.status === 401) {
      deleteCookie('access_token')
      deleteCookie('refresh_token')

      window && window.location.reload()
    }

    const error: IError = {
      code: err?.status || 500,
      message: errMessage,
      raw: err,
    }

    console.log(`❌ Request Error ${url}`, error)

    return { status: false, data: null, message: null, raw: null, error }
  }
}
