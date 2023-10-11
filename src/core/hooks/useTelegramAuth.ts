import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { fetchAuth, userAuthRefresh } from '@/core/api/session.api'
import { ITelegramAuthDto } from '@/core/interface/Initialization'
import { useAppDispatch } from '@/core/store'
import { getProfileThunk } from '@/core/store/session.store'
export interface IUseTelegramAuth {
  shopId: string
}

export const useTelegramAuth = ({ shopId }: IUseTelegramAuth) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  const refreshWatcher = useCallback(() => {
    const updateSession = async () => {
      const refreshToken = getCookie('refresh_token')

      if (!refreshToken) return
      const { data, error } = await userAuthRefresh()

      if (data) {
        setCookie('access_token', data?.access_token)
        setCookie('refresh_token', data?.refresh_token)
      }

      if (error) {
        deleteCookie('access_token')
        deleteCookie('refresh_token')

        window && window.location.reload()
      }
    }

    updateSession()
    timer.current = setInterval(updateSession, 30 * 60 * 1000)

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [])

  const onAuthSuccess = async (req: ITelegramAuthDto) => {
    const { data } = await fetchAuth({ shopId, user: req })

    try {
      if (data) {
        setCookie('access_token', data.access_token)
        setCookie('refresh_token', data.refresh_token)

        const { payload } = await dispatch(getProfileThunk())
        if (!payload) throw new Error()

        router.push('/')
      }
    } catch (err) {
      toast.error('Что то пошло не так. Обратитесь к администратору')
    }
  }

  return {
    refreshWatcher,
    onAuthSuccess,
  }
}
