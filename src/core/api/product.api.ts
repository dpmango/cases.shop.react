import type { IApiResponse, IReqPagination } from '@/core/interface/Api'
import type { IProductCategory, IProductDto } from '@/core/interface/Product'
import { addTokenToRequest, buildParams } from '@/core/utils/api'

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
  token?: string
}
export const getCategory = async ({ id, token }: ICategoryPayload) => {
  const { error, raw }: IApiResponse<{ category: IProductCategory }> = await api(
    `category`,
    addTokenToRequest(
      {
        params: { id, showItemsInCategory: 'true' },
      },
      token,
    ),
  )

  return { data: raw?.category, error }
}

// get prodcuts
export interface IPopularProductsPayload extends IReqPagination {
  token?: string
}

export const getPopularProducts = async ({
  limit = 8,
  offset = 0,
  token,
}: IPopularProductsPayload) => {
  const req = addTokenToRequest(
    {
      params: {
        limit: limit.toString(),
        offset: offset.toString(),
      },
    },
    token,
  )

  const { error, raw }: IApiResponse<{ list: IProductDto[]; total: number }> = await api(
    `popular_items`,
    req,
  )

  return { data: raw, error }
}
