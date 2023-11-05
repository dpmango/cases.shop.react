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

  const navigateToProduct = (id: string, category?: string) => {
    const link = `/${category || 'p'}/${id}`

    if (!user) {
      setCookie('lastRoute', link)
      router.replace('/auth')
      return
    }

    router.push(link)
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
