import type { IApiResponse } from '@/core/interface/Api'
import type { IPaymentDto } from '@/core/interface/Payment'

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
      shop,
      sum,
      paymentId: paymentId,
    },
  })

  return { data: raw, error }
}
