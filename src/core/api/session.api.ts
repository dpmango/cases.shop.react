import { getCookie, setCookie } from 'cookies-next'

import type { IApiResponse, IBooleanResponse, IReqId } from '@/core/interface/Api'
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

// Проверка юзера (роутинг куда направлять)
export interface IAuthCheckUser extends IReqId {
  email: string
}

export const authCheckUser = async ({ shopId, email }: IAuthCheckUser) => {
  const { error, status }: IApiResponse<IBooleanResponse> = await api(`auth/check-user`, {
    method: 'POST',
    body: {
      shopId,
      email: email.toLowerCase(),
    },
  })

  return { status, error }
}

// Логин
export interface IAuthLogin extends IReqId {
  email: string
  password: string
}

export const authLogin = async ({ shopId, email, password }: IAuthLogin) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/login`, {
    method: 'POST',
    body: {
      shopId,
      email: email.toLowerCase(),
      password,
    },
  })

  return { data: raw, error }
}

// Регистрация
export interface IAuthSignup extends IReqId {
  email: string
  password: string
}

export const authSignup = async ({ shopId, email, password }: IAuthSignup) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/signup`, {
    method: 'POST',
    body: {
      shopId,
      email: email.toLowerCase(),
      password,
    },
  })

  return { data: raw, error }
}

// Запросить email
export interface IAuthRequestConfirm extends IReqId {
  email: string
}

export const authRequestConfirm = async ({ shopId, email }: IAuthRequestConfirm) => {
  const { error, raw }: IApiResponse<IBooleanResponse> = await api(`auth/request-confirm`, {
    method: 'POST',
    body: {
      shopId,
      email: email.toLowerCase(),
    },
  })

  return { data: raw, error }
}

// Подтвердить email
export interface IAuthConfirmEmail extends IReqId {
  token: string
  email: string
}

export const authConfirmEmail = async ({ shopId, token, email }: IAuthConfirmEmail) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/confirm-email`, {
    method: 'POST',
    body: {
      shopId,
      token,
      email: email.toLowerCase(),
    },
  })

  return { data: raw, error }
}

// Восстановить пароль
export interface IAuthRecover extends IReqId {
  email: string
}

export const authRecover = async ({ shopId, email }: IAuthRecover) => {
  const { error, raw }: IApiResponse<IBooleanResponse> = await api(`auth/recover`, {
    method: 'POST',
    body: {
      shopId,
      email: email.toLowerCase(),
    },
  })

  return { data: raw, error }
}

// Подтверждение восстановления
export interface IAuthResetConfirm extends IReqId {
  token: string
  email: string
  password: string
}

export const authResetConfirm = async ({ shopId, token, email, password }: IAuthResetConfirm) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/reset-confirm-email`, {
    method: 'POST',
    body: {
      shopId,
      token,
      email: email.toLowerCase(),
      password,
    },
  })

  return { data: raw, error }
}

// Auth refresh
export const userAuthRefresh = async () => {
  const refreshToken = getCookie('refresh_token')

  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  })

  return { data: raw, error }
}

// Profile
export const getProfile = async () => {
  const { error, raw }: IApiResponse<IProfileDto> = await api(`user`, {})

  return { data: raw, error }
}
