import type { IApiResponse } from '@/core/interface/Api'
import type { IPaymentDto } from '@/core/interface/Payment'

import { api } from './api'
// save product to bot
export interface ISaveProductPayload {
  id: string
}

export const saveProductToBot = async ({ id }: ISaveProductPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api(
    `${process.env.BACKEND_OLD_URL}showiteminbot`,
    {
      method: 'POST',
      body: {
        item_id: id,
      },
    },
  )

  return { data: raw, error }
}

// get payment
export interface IPaymentPayload {
  amount: number
  type: string
}

export const getPayment = async ({ amount, type }: IPaymentPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api(
    `${process.env.BACKEND_OLD_URL}payment/create`,
    {
      method: 'POST',
      body: {
        amount: amount <= 100 ? 100 : amount,
        type,
      },
    },
  )

  return { data: raw, error }
}
