import type { IApiResponse } from '@/core/interface/Api'
import type { IReviewDto } from '@/core/interface/Review'

// get reviews
export interface IReviewsPayload {
  shopId: string
  limit?: number
  offset?: number
}

export const getReviews = async ({ shopId, limit = 30, offset }: IReviewsPayload) => {
  const { error, raw }: IApiResponse<{ reviews: IReviewDto[] }> = await api(`reviews`, {
    params: {
      shopId,
      limit: limit ? limit.toString() : '',
      offset: offset ? offset.toString() : '',
    },
  })

  return { data: raw?.reviews, error }
}
