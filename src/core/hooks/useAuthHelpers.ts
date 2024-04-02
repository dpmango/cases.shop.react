import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/core/store'

import { IAuthDto } from '../interface/Initialization'
import { getProfileThunk } from '../store/session.store'

export const useAuthHelpers = () => {
  const { user } = useAppSelector((store) => store.sessionState)
  const dispatch = useAppDispatch()

  const router = useRouter()

  const checkLoginCookie = () => {
    const cookieEmail = getCookie('loginEmail')

    if (!cookieEmail) {
      router.replace('/auth')
    }

    return cookieEmail as string
  }

  const onAuthSuccess = async (data: IAuthDto, navigate = true) => {
    setCookie('access_token', data.access_token)
    setCookie('refresh_token', data.refresh_token)

    const { payload } = await dispatch(getProfileThunk())
    if (!payload) throw new Error()

    if (navigate) {
      const lastRouteBeforeAuth = getCookie('lastRoute')
      if (lastRouteBeforeAuth) {
        router.replace(lastRouteBeforeAuth)
        deleteCookie('lastRoute')
      } else {
        router.replace('/')
      }
    }
  }

  return {
    checkLoginCookie,
    onAuthSuccess,
  }
}
