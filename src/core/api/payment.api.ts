import type { IApiResponse } from '@/core/interface/Api'
import type { IPaymentDto } from '@/core/interface/Payment'

// get prodcuts
export interface IPaymentPayload {
  amount: number
}

export const getPayment = async ({ amount }: IPaymentPayload) => {
  const { data, error, raw }: IApiResponse<IPaymentDto> = await api('payment/create', {
    method: 'POST',
    body: {
      amount,
    },
  })

  return { data: raw, error }
}
