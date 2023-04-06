import type { IApiResponse } from '@/core/interface/Api'
import type {
  IAuthDto,
  IInitDataDto,
  IProfileDto,
  ITelegramAuthDto,
} from '@/core/interface/Initialization'

// initialize
export const initializeApp = async () => {
  const { data, error }: IApiResponse<IInitDataDto> = await api('initialize', {})

  return { data, error }
}

// Auth (shop)
export interface IAuthPayload {
  shopId: number
  telegram: ITelegramAuthDto
}

export const fetchAuth = async ({ shopId, telegram, ...rest }: IAuthPayload) => {
  const { data, error }: IApiResponse<IAuthDto> = await api(`auth/${3}`, {
    method: 'POST',
    body: {
      ...rest,
      telegram,
    },
  })

  return { data, error }
}

// Auth (user token)
export interface IUserAuthPayload {
  token: string | null
}

export const userAuth = async ({ token }: IUserAuthPayload) => {
  const { data, error }: IApiResponse<IAuthDto> = await api(`auth`, {
    method: 'PATCH',
    body: {
      token,
    },
  })

  return { data, error }
}

// Profile
export const getProfile = async () => {
  const { data, error }: IApiResponse<IProfileDto> = await api('profile', {
    body: {},
  })

  return { data, error }
}

// purchases
export interface IPurchasesPayload {
  shopId: number
}

export const getPurchases = async ({ shopId }: IPurchasesPayload) => {
  const { data, error }: IApiResponse<string[]> = await api(`purchases/${shopId}`, {})

  return { data, error }
}
