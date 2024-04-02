import { ofetch } from 'ofetch'

import type { IApiResponse } from '@/core/interface/Api'

import { IHomePageDto } from '../interface/Homepage'
import { api } from './api'

// homepage
export const getMainPage = async () => {
  const { error, raw }: IApiResponse<IHomePageDto> = await api(`main`, {
    params: {
      showItemsInCategory: 'true',
    },
  })

  return { data: raw, error }
}

// static page (content page)
export interface IGetStaticPagePayload {
  id: string
  shopId: string
}

export const getStaticPage = async ({ id, shopId }: IGetStaticPagePayload) => {
  const data = await ofetch(`https://shopcore.ru/store/api/custom_page`, {
    params: {
      ID: id,
      shopId,
    },
  })

  const error = data ? null : 'error'

  return { data, error }
}
