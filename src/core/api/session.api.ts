import type { IApiResponse } from '@/core/interface/Api'
import type {
  IAuthDto,
  IInitDataDto,
  IProfileDto,
  ITelegramAuthDto,
} from '@/core/interface/Initialization'
import type { IOrderDto } from '@/core/interface/Order'

// initialize
export interface ISettingsPayload {
  shopId: string
}

export const initializeApp = async ({ shopId }: ISettingsPayload) => {
  const { data, error, raw }: IApiResponse<IInitDataDto> = await api(`settings`, {
    params: { shopId },
  })

  return { data: raw, error }
}

// Orders
export interface IOrdersPayload {
  shopId: string
}

export const getOrders = async ({ shopId }: IOrdersPayload) => {
  const { error, raw }: IApiResponse<{ orders: IOrderDto[] }> = await api(`orders`, {
    params: { shopId },
  })

  return { data: raw?.orders, error }
}

// Auth (авторизация от ТГ)
export interface IAuthPayload {
  shopId: string
  telegram: ITelegramAuthDto
}

export const fetchAuth = async ({ shopId, telegram, ...rest }: IAuthPayload) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth`, {
    method: 'POST',
    body: {
      ...rest,
      shop_id: shopId,
      user: telegram,
    },
  })

  return { data: raw, error }
}

// Auth (user token)
export interface IUserAuthRefreshPayload {
  token: string
}

export const userAuthRefresh = async ({ token }: IUserAuthRefreshPayload) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`token/refresh`, {
    method: 'POST',
    body: {
      token,
    },
    headers: {
      refresh_token: token,
    },
  })

  return { data: raw, error }
}

// Profile
export const getProfile = async () => {
  const { error, raw }: IApiResponse<IProfileDto> = await api('profile/get', {})

  return { data: raw, error }
}
