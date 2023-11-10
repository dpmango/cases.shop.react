import type { IApiResponse } from '@/core/interface/Api'
import type { IReviewDto } from '@/core/interface/Homepage'
import { buildParams } from '@/core/utils'

import { api } from './api'
// get reviews
export interface IReviewsPayload {
  limit?: number
  offset?: number
}

export const getReviews = async ({ limit = 8, offset = 0 }: IReviewsPayload) => {
  const { error, raw }: IApiResponse<{ list: IReviewDto[] }> = await api(`reviews`, {
    params: buildParams({
      limit: limit.toString(),
      offset: offset.toString(),
    }),
  })

  return { data: raw?.list, error }
}
