import type { IApiResponse } from '@/core/interface/Api'
import type { IProductCategoryDto, IProductFullDto } from '@/core/interface/Product'

// get prodcuts
export interface IProductsPayload {
  shopId: string
}

export const getProducts = async ({ shopId }: IProductsPayload) => {
  const { error, raw }: IApiResponse<{ items: IProductCategoryDto[] }> = await api(`items/v2`, {
    params: { shopId },
  })

  return { data: raw.items, error }
}

export interface IProductPayload {
  shopId: string
  id: string
}

export const getProduct = async ({ shopId, id }: IProductPayload) => {
  const { error, raw }: IApiResponse<{ item: IProductFullDto }> = await api(`item`, {
    params: { shopId, id },
  })

  return { data: raw.item, error }
}
