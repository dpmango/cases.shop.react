import * as toolkitRaw from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { IProductListDto } from '../interface/Product'
import { IReviewDto } from '../interface/Review'

export interface IProductStore {
  productsFetching: boolean
  items: IProductListDto | null
  reviewsFetching: boolean
  reviews: IReviewDto[] | null
}

const initialState: IProductStore = {
  productsFetching: true,
  items: null,
  reviewsFetching: true,
  reviews: null,
}

// thunks
export const getProductThunk = createAsyncThunk(
  'product/get',
  async ({ shopId }: { shopId: string }) => {
    const { data } = await getProducts({ shopId })

    return data
  },
)

export const getReviewsThunk = createAsyncThunk(
  'reviews/get',
  async ({ shopId }: { shopId: string }) => {
    const { data } = await getReviews({ shopId })

    return data
  },
)

export const productState = toolkitRaw.createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateReviews(state, action: toolkitRaw.PayloadAction<IReviewDto[]>) {
      state.reviews = [...action.payload]
    },
  },
  extraReducers: (builder) => {
    // Catalog* like with Product Dto's
    builder.addCase(getProductThunk.pending, (state) => {
      state.productsFetching = true
    })
    builder.addCase(
      getProductThunk.fulfilled,
      (state, action: toolkitRaw.PayloadAction<IProductListDto | null>) => {
        if (action.payload) {
          state.items = {
            ...action.payload,
          }
        }

        state.productsFetching = false
      },
    )
    // reviews
    builder.addCase(getReviewsThunk.pending, (state) => {
      state.reviewsFetching = true
    })
    builder.addCase(
      getReviewsThunk.fulfilled,
      (state, action: toolkitRaw.PayloadAction<IReviewDto[] | null>) => {
        if (action.payload) {
          state.reviews = [...action.payload]
        }

        state.reviewsFetching = false
      },
    )
  },
})

export const { updateReviews } = productState.actions

export default productState.reducer
