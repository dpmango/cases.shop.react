import type { IApiResponse } from '@/core/interface/Api'

import { INotificationDto } from '../interface/Notification'
import { addTokenToRequest } from '../utils'
import { api } from './api'

export const getFavourites = async (token?: string) => {
  let params = addTokenToRequest({}, token)

  const { error, raw }: IApiResponse<{ items: any[] }> = await api(`favourites`, params)

  return { data: raw?.items, error }
}

export const getFavouritesCategories = async (token?: string) => {
  let params = addTokenToRequest({}, token)

  const { error, raw }: IApiResponse<{ categories: any[] }> = await api(`favourites`, params)

  return { data: raw?.categories, error }
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

// Уведомления
export const getNotifications = async (token?: string) => {
  let params = addTokenToRequest({}, token)

  const { error, raw }: IApiResponse<INotificationDto[]> = await api(`notifications`, params, true)

  return { data: raw, error }
}

// прочитать уведомления
interface IMarkNotificationsSeen {
  ids: string[]
}

export const markNotificationSeen = async ({ ids }: IMarkNotificationsSeen) => {
  const { error, raw }: IApiResponse<{ items: any[] }> = await api(`notifications/seen`, {
    method: 'POST',
    body: ids,
  })

  return { data: raw?.items, error }
}
