import type { IApiResponse } from '@/core/interface/Api'
import type { IReviewDto } from '@/core/interface/Review'

// get reviews
export interface IReviewsPayload {
  shopId: number
  offset?: number
}

export const getReviews = async ({ shopId, offset }: IReviewsPayload) => {
  const { data, error }: IApiResponse<IReviewDto> = await api(`reviews/${3}`, {
    params: {
      offset: offset ? offset.toString() : '',
    },
  })

  return { data, error }
}
