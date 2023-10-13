import type { IApiResponse } from '@/core/interface/Api'
import type { IReviewDto } from '@/core/interface/Review'
import { buildParams } from '@/core/utils'

import { api } from './api'
// get reviews
export interface IReviewsPayload {
  limit?: number
  offset?: number
}

export const getReviews = async ({ limit = 20, offset }: IReviewsPayload) => {
  const { error, raw }: IApiResponse<{ list: IReviewDto[] }> = await api(`reviews`, {
    params: buildParams({
      limit: limit ? limit.toString() : '',
      offset: offset ? offset.toString() : '',
    }),
  })

  return { data: raw?.list, error }
}
