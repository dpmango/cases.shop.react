import type { IApiResponse } from '@/core/interface/Api'
import type { IReviewDto } from '@/core/interface/Review'

// get reviews
export interface IReviewsPayload {
  shopId: string
  offset?: number
}

export const getReviews = async ({ shopId, offset }: IReviewsPayload) => {
  const { error, raw }: IApiResponse<{ reviews: IReviewDto[] }> = await api(`reviews`, {
    params: {
      shopId,
      offset: offset ? offset.toString() : '',
    },
  })

  return { data: raw.reviews, error }
}
