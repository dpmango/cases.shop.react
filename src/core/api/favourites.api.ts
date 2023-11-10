import type { IApiResponse } from '@/core/interface/Api'

import { addTokenToRequest } from '../utils'
import { api } from './api'

export const getFavourites = async (token?: string) => {
  let params = addTokenToRequest({}, token)

  const { error, raw }: IApiResponse<{ items: any[] }> = await api(`favourites`, params)

  return { data: raw?.items, error }
}

// добавить/удалить в избранное
export interface IFavouritePayload {
  action: 'add' | 'remove'
  type: 'item' | 'category'
  id: string
}

export const toggleFavourite = async ({ action, type, id }: IFavouritePayload) => {
  const { error, raw }: IApiResponse<any> = await api(`favourites/${action}`, {
    method: 'POST',
    body: {
      type,
      id,
    },
  })

  return { data: raw, error }
}
