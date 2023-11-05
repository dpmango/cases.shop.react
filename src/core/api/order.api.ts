import { IOrderFormField } from '@/components/Order/Form'
import type { IApiResponse, IReqPagination } from '@/core/interface/Api'
import { buildParams } from '@/core/utils/api'

import { ICreatedOrderDto, IOrderDto, ISteamRatesDto, IUserOrderDto } from '../interface/Order'
import { api, IRequestOptions } from './api'

// get categories
export interface IOrderFormPayload {
  item_id: string
  platform?: string
  accessToken?: string
}

export const getOrderForm = async ({ item_id, platform, accessToken }: IOrderFormPayload) => {
  let params = {
    params: buildParams({ item_id, platform }),
  } as IRequestOptions

  if (accessToken) {
    params = {
      ...params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  }

  const { error, data, raw }: IApiResponse<IOrderDto> = await api(`order-form`, params)

  return { data: raw, error }
}

export interface ICreateOrderPayload {
  item_id: string
  platform: string | null
  fields: IOrderFormField[]
  steamDeposit?: number
}

// Создание заказа
export const createOrder = async ({
  item_id,
  platform = null,
  fields,
  steamDeposit,
}: ICreateOrderPayload) => {
  let orderFields = [...fields] as IOrderFormField[]

  if (platform) {
    orderFields.push({
      id: 'platform',
      value: platform,
    })
  }

  if (process.env.ORDER_TEST_MODE === 'true') {
    orderFields.push({
      id: 'test',
      value: '',
    })
  }

  if (steamDeposit) {
    orderFields = orderFields.map((x) =>
      x.id === 'steam-amount'
        ? {
            id: 'steam-amount',
            value: `${steamDeposit}`,
          }
        : x,
    )
  }

  const { error, data, raw }: IApiResponse<ICreatedOrderDto> = await api(`order`, {
    method: 'POST',
    body: {
      item_id,
      fields: orderFields,
    },
  })

  return { data: raw, error }
}

// Проверка steam логина
export interface ICheckSteamLoginPayload {
  login: string
}

export const checkSteamLogin = async ({ login }: ICheckSteamLoginPayload) => {
  const { error, data, raw }: IApiResponse<any> = await api(`steam-check-login`, {
    method: 'POST',
    body: {
      login,
    },
  })

  return { data: raw, error }
}

// Коммисии steam
export interface IGetSteamRatesPayload {}

export const getSteamRates = async () => {
  const { error, data, raw }: IApiResponse<ISteamRatesDto> = await api(`steam-comissions`, {})

  return { data: raw, error }
}

// Получение заказов пользователя
export interface IGetUserOrdersPayload {
  accessToken?: string
}

export const getUserOrders = async ({ accessToken }: IGetUserOrdersPayload) => {
  let params = {}

  if (accessToken) {
    params = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  }

  const { error, data, raw }: IApiResponse<IUserOrderDto[]> = await api(`user/orders`, params, true)

  return { data: raw, error }
}
