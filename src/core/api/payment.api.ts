import type { IApiResponse, IReqId } from '@/core/interface/Api'
import type { IPaymentDto } from '@/core/interface/Payment'

import { api } from './api'

// get payment
export interface IPaymentPayload extends IReqId {
  sum: number
  paymentId: string
}

export const getPayment = async ({ shopId, sum, paymentId }: IPaymentPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api(`deposit`, {
    method: 'POST',
    body: {
      shopId: shopId,
      sum,
      paymentId: paymentId,
    },
  })

  return { data: raw, error }
}
