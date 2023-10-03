import { getCookie, setCookie } from 'cookies-next'

import type { IApiResponse, IReqId } from '@/core/interface/Api'
import type {
  IAuthDto,
  IInitDataDto,
  IProfileDto,
  ITelegramAuthDto,
  IWhoisDto,
} from '@/core/interface/Initialization'
import type { IOrderDto } from '@/core/interface/Order'

import { api } from './api'

// domain resolve
export interface IWhoisPayload {
  site: string
}

export const getWhois = async ({ site }: IWhoisPayload) => {
  const { data, error, raw }: IApiResponse<IWhoisDto> = await api(`whois`, {
    params: { site },
  })

  return { data: raw, error }
}

// initialize
export interface ISettingsPayload extends IReqId {
  site: string
}

export const initializeApp = async ({ shopId }: ISettingsPayload) => {
  const { data, error, raw }: IApiResponse<IInitDataDto> = await api(
    `${process.env.BACKEND_OLD_URL}settings`,
    {
      params: { shopId },
    },
  )

  return { data: raw, error }
}

// Orders
export interface IOrdersPayload extends IReqId {}

export const getOrders = async ({ shopId }: IOrdersPayload) => {
  const { error, raw }: IApiResponse<{ orders: IOrderDto[] }> = await api(
    `${process.env.BACKEND_OLD_URL}orders`,
    {
      params: { shopId },
    },
  )

  return { data: raw?.orders, error }
}

// Auth (авторизация от ТГ)
export interface IAuthPayload extends IReqId {
  user: ITelegramAuthDto
}

export const fetchAuth = async ({ shopId, user }: IAuthPayload) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth`, {
    method: 'POST',
    body: {
      shop_id: shopId,
      user,
    },
  })

  return { data: raw, error }
}

// Auth refresh
export const userAuthRefresh = async () => {
  const refreshToken = getCookie('access_token')

  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/refresh`, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  })

  return { data: raw, error }
}

// Profile
export const getProfile = async () => {
  const { error, raw }: IApiResponse<IProfileDto> = await api(
    `${process.env.BACKEND_OLD_URL}profile/get`,
    {
      params: {
        imagefrombot: process.env.VITE_USE_BOT_IMAGE || 'false',
      },
    },
  )

  return { data: raw, error }
}
