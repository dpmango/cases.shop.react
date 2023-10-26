import { IOrderFormField } from '@/components/Order/Form'
import type { IApiResponse, IReqPagination } from '@/core/interface/Api'
import type { IPopularProduct, IProductCategory } from '@/core/interface/Product'
import { buildParams } from '@/core/utils/api'

import { ICreatedOrderDto, IOrderDto } from '../interface/Order'
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
  platform: string
  fields: IOrderFormField[]
  steamDeposit?: number
}

// Создание заказа
export const createOrder = async ({
  item_id,
  platform,
  fields,
  steamDeposit,
}: ICreateOrderPayload) => {
  const orderFields = [
    ...fields,
    {
      id: 'platform',
      value: platform,
    },
    {
      id: 'test',
      value: '',
    },
  ]

  if (steamDeposit) {
    orderFields.push({
      id: 'steam_rub',
      value: steamDeposit.toString(),
    })
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

  const { error, data, raw }: IApiResponse<IOrderDto> = await api(`user/orders`, params, true)

  return { data: raw, error }
}
