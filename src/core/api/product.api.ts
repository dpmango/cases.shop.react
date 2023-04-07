import type { IApiResponse } from '@/core/interface/Api'
import type { IProductDto, IProductListDto } from '@/core/interface/Product'

// get prodcuts
export interface IProductsPayload {
  shopId: string
}
export const getProducts = async ({ shopId }: IProductsPayload) => {
  const { error, raw }: IApiResponse<{ categories: IProductListDto }> = await api(`items`, {
    params: { shopId },
  })

  return { data: raw.categories, error }
}
