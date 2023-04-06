import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { IProductListDto } from '../interface/Product'
import { IReviewDto } from '../interface/Review'

export interface IProductStore {
  productsPending: boolean
  items: IProductListDto | null
  reviewsPending: boolean
  reviews: IReviewDto[] | null
}

const initialState: IProductStore = {
  productsPending: true,
  items: null,
  reviewsPending: true,
  reviews: null,
}

// thunks
export const getProductThunk = createAsyncThunk(
  'product/get',
  async ({ shopId }: { shopId: number }) => {
    const { data } = await getProducts({ shopId })

    return data
  },
)

export const getReviewsThunk = createAsyncThunk(
  'reviews/get',
  async ({ shopId }: { shopId: number }) => {
    const { data } = await getReviews({ shopId })

    return data
  },
)

export const productState = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateReviews(state, action: PayloadAction<IReviewDto[]>) {
      state.reviews = [...action.payload]
    },
  },
  extraReducers: (builder) => {
    // Catalog* like with Product Dto's
    builder.addCase(getProductThunk.pending, (state) => {
      state.productsPending = true
    })
    builder.addCase(
      getProductThunk.fulfilled,
      (state, action: PayloadAction<IProductListDto | null>) => {
        state.productsPending = false

        if (action.payload) {
          state.items = {
            ...action.payload,
          }
        }
      },
    )
    // reviews
    builder.addCase(getReviewsThunk.pending, (state) => {
      state.productsPending = true
    })
    builder.addCase(
      getReviewsThunk.fulfilled,
      (state, action: PayloadAction<IReviewDto[] | null>) => {
        state.productsPending = false

        if (action.payload) {
          state.reviews = [...action.payload]
        }
      },
    )
  },
})

export const { updateReviews } = productState.actions

export default productState.reducer
