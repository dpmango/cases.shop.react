import { ofetch } from 'ofetch'

// get reviews
export interface IReviewsPayload {
  shopId: string
  id: string
}

export const getStaticPage = async ({ shopId, id }: IReviewsPayload) => {
  const data = await ofetch(`${process.env.VITE_BACKEND_URL}custom_page`, {
    params: {
      shopId,
      ID: id,
    },
  })

  const error = data ? null : 'error'

  return { data, error }
}
