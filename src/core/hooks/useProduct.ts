import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/core/store'

export const useProduct = () => {
  const { user } = useAppSelector((store) => store.sessionState)

  const router = useRouter()

  const navigateToProduct = (id: string) => {
    if (!user) {
      router.push('/auth')
      return
    }

    router.push(`/order?id=${id}`)
  }

  return {
    navigateToProduct,
  }
}
