import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/core/store'

import { toggleFavourite } from '../api'
import { IProductItem } from '../interface/Product'

export const useProduct = ({ favourite }: { favourite?: boolean }) => {
  const [isFavourted, setIsFavourted] = useState(favourite || false)
  const [favouritePending, setFavouritePending] = useState(false)

  const { user } = useAppSelector((store) => store.sessionState)
  const dispatch = useAppDispatch()

  const router = useRouter()

  const navigateToProduct = (id: string) => {
    if (!user) {
      setCookie('lastRoute', `/order?id=${id}`)
      router.replace('/auth')
      return
    }

    router.push(`/order?id=${id}`)
  }

  const handleFavourite = async ({ id }: { id: string }) => {
    if (favouritePending) return
    const action = isFavourted ? 'remove' : 'add'

    setFavouritePending(true)
    setIsFavourted(action === 'add')

    const { data, error } = await toggleFavourite({
      action,
      type: 'item',
      id: id,
    })

    if (error) {
      setIsFavourted(action !== 'add')
    }

    setFavouritePending(false)
  }

  return {
    isFavourted,
    navigateToProduct,
    handleFavourite,
  }
}
