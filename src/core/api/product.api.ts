import type { IApiResponse, IReqPagination } from '@/core/interface/Api'
import type { IProductCategory, IProductDto } from '@/core/interface/Product'
import { buildParams } from '@/core/utils/api'

import { api } from './api'

// get categories
export interface ICategoriesPayload {}
export const getCategories = async ({}: ICategoriesPayload) => {
  const { error, raw }: IApiResponse<{ items: IProductCategory[] }> = await api(`categories`, {
    params: { showItemsInCategory: 'true' },
  })

  return { data: raw?.items, error }
}

// get categories
export interface ICategoryPayload {
  id: string
}
export const getCategory = async ({ id }: ICategoryPayload) => {
  const { error, raw }: IApiResponse<{ category: IProductCategory }> = await api(`category`, {
    params: { id, showItemsInCategory: 'true' },
  })

  return { data: raw?.category, error }
}

// get prodcuts
export interface IPopularProductsPayload extends IReqPagination {}

export const getPopularProducts = async ({ limit, offset }: IPopularProductsPayload) => {
  const { error, raw }: IApiResponse<{ list: IProductDto[] }> = await api(`popular_items`, {
    params: buildParams({
      limit: limit ? limit.toString() : '',
      offset: offset ? offset.toString() : '',
    }),
  })

  return { data: raw?.list, error }
}
