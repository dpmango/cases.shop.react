import type { IApiResponse, IReqId } from '@/core/interface/Api'

import { IHomePageDto } from '../interface/Homepage'
import { api } from './api'

// homepage
export interface IGetMainPagePayload extends IReqId {}

export const getMainPage = async ({ shopId }: IGetMainPagePayload) => {
  const { error, raw }: IApiResponse<IHomePageDto> = await api(`main`, {
    params: {
      shopId,
      showItemsInCategory: 'true',
    },
  })

  return { data: raw, error }
}

// static page (content page)
export interface IGetStaticPagePayload extends IReqId {
  id: string
}

export const getStaticPage = async ({ shopId, id }: IGetStaticPagePayload) => {
  const data = await api(`${process.env.BACKEND_URL}custom_page`, {
    params: {
      shopId,
      ID: id,
    },
  })

  const error = data ? null : 'error'

  return { data, error }
}
