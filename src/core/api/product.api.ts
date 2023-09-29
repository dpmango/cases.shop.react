import type { IApiResponse, IReqId, IReqPagination } from '@/core/interface/Api'
import type {
  IPopularProduct,
  IProductCategoryDto,
  IProductFullDto,
} from '@/core/interface/Product'
import { buildParams } from '@/core/utils/api'

import { api } from './api'
// get prodcuts

export interface IProductsPayload extends IReqId {}

export const getProducts = async ({ shopId }: IProductsPayload) => {
  const { error, raw }: IApiResponse<{ items: IProductCategoryDto[] }> = await api(
    `${process.env.BACKEND_OLD_URL}items/v2`,
    {
      params: { shopId },
    },
  )

  return { data: raw?.items, error }
}

export interface IPopularProductsPayload extends IReqId, IReqPagination {}

export const getPopularProducts = async ({ shopId, limit, offset }: IPopularProductsPayload) => {
  const { error, raw }: IApiResponse<{ list: IPopularProduct[] }> = await api(`popular_items`, {
    params: buildParams({
      shopId,
      limit: limit ? limit.toString() : '',
      offset: offset ? offset.toString() : '',
    }),
  })

  return { data: raw?.list, error }
}

export interface IProductPayload extends IReqId {
  id: string
}

export const getProduct = async ({ shopId, id }: IProductPayload) => {
  const { error, raw }: IApiResponse<{ item: IProductFullDto }> = await api(
    `${process.env.BACKEND_OLD_URL}item`,
    {
      params: { shopId, id },
    },
  )

  return { data: raw?.item, error }
}
