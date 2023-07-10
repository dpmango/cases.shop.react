import type { IApiResponse } from '@/core/interface/Api'
import type { IPaymentDto } from '@/core/interface/Payment'

// save product to bot
export interface ISaveProductPayload {
  id: string
}

export const saveProductToBot = async ({ id }: ISaveProductPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api('showiteminbot', {
    method: 'POST',
    body: {
      item_id: id,
    },
  })

  return { data: raw, error }
}

// get payment
export interface IPaymentPayload {
  amount: number
  type: string
}

export const getPayment = async ({ amount, type }: IPaymentPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api('payment/create', {
    method: 'POST',
    body: {
      amount: amount < 99 ? 99 : amount,
      type,
    },
  })

  return { data: raw, error }
}
