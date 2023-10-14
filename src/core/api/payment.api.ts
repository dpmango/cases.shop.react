import type { IApiResponse } from '@/core/interface/Api'
import type { IPaymentDto, IPaymentStatusDto } from '@/core/interface/Payment'

import { api } from './api'

// get payment
export interface IPaymentPayload {
  sum: number
  paymentId: string
}

export const getPayment = async ({ sum, paymentId }: IPaymentPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api(`deposit`, {
    method: 'POST',
    body: {
      sum,
      paymentId: paymentId,
    },
  })

  return { data: raw, error }
}

export const getPaymentStatus = async (id: string) => {
  const { data, error, raw }: IApiResponse<IPaymentStatusDto> = await api(`check-deposit`, {
    params: {
      id: id,
    },
  })

  return { data: raw, error }
}
