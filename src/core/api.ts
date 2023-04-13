import Cookies from 'js-cookie'
import { FetchError, FetchOptions, ofetch } from 'ofetch'

import type { IError } from '@/core/interface/Api'

interface IRequestOptions {
  method?: string
  body?: { [key: string]: any }
  headers?: { [key: string]: string }
  params?: { [key: string]: string }
}

interface IApiResult {
  data: any | null
  raw: any | null
  error: any | null
  message: string | null
}

export const api = async (
  url: string,
  { method = 'GET', body, params, headers }: IRequestOptions,
): Promise<IApiResult> => {
  try {
    let accessToken = Cookies.get('access_token')
    accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJzdG9yZV91c2VyIiwidXNlcl9pZCI6IjYwNzMyMjc3NzciLCJzaG9wX2lkIjoiS2htZWxldnNrb3kiLCJpc19hZG1pbiI6IjEiLCJleHAiOjE2ODE0MDkxNTksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzI3LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzI3LyJ9.2NEsY_7cfeA5BK95nKq1HeU44oPVFxNLgm4xcAR0y0Y'

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
        Authorization: `Bearer ${accessToken}`,
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

    const DEV_perf_start = performance.now()
    const { data, msg, status, errorCode, ...raw } = await ofetch(requestUrl, requestOptions)
    const DEV_perf_end = performance.now()

    console.log(`👌 fetch ${url} in ${(DEV_perf_end - DEV_perf_start).toFixed(2)} ms`, data)

    if (status === true || status === undefined) {
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
      const { data } = await userAuthRefresh({
        token: Cookies.get('refresh_token') || '',
      })

      if (data) {
        Cookies.set('access_token', data.access_token)
        Cookies.set('refresh_token', data.refresh_token)
        console.log('refetch', url, { method, body, params, headers })
        return await api(url, { method, body, params, headers })
      } else {
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')

        window && window.location.reload()
      }
    }

    const error: IError = {
      code: err?.status || 500,
      message: errMessage,
      raw: err,
    }

    console.log('❌ Request Error', error)

    return { data: null, message: null, raw: null, error }
  }
}
