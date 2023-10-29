import { getCookie, setCookie } from 'cookies-next'

import type { IApiResponse, IBooleanResponse } from '@/core/interface/Api'
import type {
  IAuthDto,
  IInitDataDto,
  IProfileDto,
  ITelegramAuthDto,
  IWhoisDto,
} from '@/core/interface/Initialization'

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

// Auth (авторизация от ТГ)
export interface IAuthPayload {
  user: ITelegramAuthDto
}

export const fetchAuth = async ({ user }: IAuthPayload) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth`, {
    method: 'POST',
    body: {
      user,
    },
  })

  return { data: raw, error }
}

// Проверка юзера (роутинг куда направлять)
export interface IAuthCheckUser {
  email: string
}

export const authCheckUser = async ({ email }: IAuthCheckUser) => {
  const { error, status }: IApiResponse<IBooleanResponse> = await api(`auth/check-user`, {
    method: 'POST',
    body: {
      email: email.toLowerCase(),
    },
  })

  return { status, error }
}

// Логин
export interface IAuthLogin {
  email: string
  password: string
}

export const authLogin = async ({ email, password }: IAuthLogin) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/login`, {
    method: 'POST',
    body: {
      email: email.toLowerCase(),
      password,
    },
  })

  return { data: raw, error }
}

// Регистрация
export interface IAuthSignup {
  email: string
  password: string
}

export const authSignup = async ({ email, password }: IAuthSignup) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/signup`, {
    method: 'POST',
    body: {
      email: email.toLowerCase(),
      password,
    },
  })

  return { data: raw, error }
}

// Запросить email
export interface IAuthRequestConfirm {
  email: string
}

export const authRequestConfirm = async ({ email }: IAuthRequestConfirm) => {
  const { error, raw }: IApiResponse<IBooleanResponse> = await api(`auth/request-confirm`, {
    method: 'POST',
    body: {
      email: email.toLowerCase(),
    },
  })

  return { data: raw, error }
}

// Подтвердить email
export interface IAuthConfirmEmail {
  token: string
  email: string
}

export const authConfirmEmail = async ({ token, email }: IAuthConfirmEmail) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/confirm-email`, {
    method: 'POST',
    body: {
      token,
      email: email.toLowerCase(),
    },
  })

  return { data: raw, error }
}

// Восстановить пароль
export interface IAuthRecover {
  email: string
}

export const authRecover = async ({ email }: IAuthRecover) => {
  const { error, raw }: IApiResponse<IBooleanResponse> = await api(`auth/recover`, {
    method: 'POST',
    body: {
      email: email.toLowerCase(),
    },
  })

  return { data: raw, error }
}

// Подтверждение восстановления
export interface IAuthResetConfirm {
  token: string
  email: string
  password: string
}

export const authResetConfirm = async ({ token, email, password }: IAuthResetConfirm) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`auth/reset-confirm-email`, {
    method: 'POST',
    body: {
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
      Authorization: `${refreshToken}`,
    },
  })

  return { data: raw, error }
}

// Profile
export const getProfile = async (token?: string) => {
  let params = {}

  if (token) {
    params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  }

  const { error, raw }: IApiResponse<IProfileDto> = await api(`user`, params)

  return { data: raw, error }
}

// Сменить пароль
export interface IAuthChangePassword {
  oldPassword: string
  newPassword: string
}

export const authChangePassword = async ({ newPassword, oldPassword }: IAuthChangePassword) => {
  const { error, raw }: IApiResponse<IAuthDto> = await api(`user/change-password`, {
    method: 'POST',
    body: {
      oldPassword,
      newPassword,
    },
  })

  return { data: raw, error }
}
