import type { IApiResponse } from '@/core/interface/Api'
import type { IPaymentDto } from '@/core/interface/Payment'

// get prodcuts
export interface IPaymentPayload {
  amount: number
  type: string
}

export const getPayment = async ({ amount, type }: IPaymentPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api('payment/create', {
    method: 'POST',
    body: {
      amount,
      type,
    },
  })

  return { data: raw, error }
}
