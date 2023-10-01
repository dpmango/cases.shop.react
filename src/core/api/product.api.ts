import type { IApiResponse, IReqId, IReqPagination } from '@/core/interface/Api'
import type { IPopularProduct, IProductCategory } from '@/core/interface/Product'
import { buildParams } from '@/core/utils/api'

import { api } from './api'

// get categories
export interface ICategoriesPayload extends IReqId {}
export const getCategories = async ({ shopId }: ICategoriesPayload) => {
  const { error, raw }: IApiResponse<{ items: IProductCategory[] }> = await api(`categories`, {
    params: { shopId, showItemsInCategory: 'true' },
  })

  return { data: raw?.items, error }
}

// get categories
export interface ICategoryPayload extends IReqId {
  id: string
}
export const getCategory = async ({ shopId, id }: ICategoryPayload) => {
  const { error, raw }: IApiResponse<{ category: IProductCategory }> = await api(`category`, {
    params: { shopId, id, showItemsInCategory: 'true' },
  })

  return { data: raw?.category, error }
}

// get prodcuts
export interface IProductsPayload extends IReqId {}

// export const getProducts = async ({ shopId }: IProductsPayload) => {
//   const { error, raw }: IApiResponse<{ items: IProductCategoryDto[] }> = await api(
//     `${process.env.BACKEND_OLD_URL}items/v2`,
//     {
//       params: { shopId },
//     },
//   )

//   return { data: raw?.items, error }
// }

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
