import type { IApiResponse } from '@/core/interface/Api'
import type { IProductDto } from '@/core/interface/Product'

// get prodcuts
export interface IProductsPayload {
  shopId: number
}
export const getProducts = async ({ shopId }: IProductsPayload) => {
  const { data, error }: IApiResponse<IProductDto> = await api(`items/${3}`, {})

  return { data, error }
}
