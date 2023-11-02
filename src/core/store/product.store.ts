import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IReviewDto } from '../interface/Homepage'
import { IProductCategory } from '../interface/Product'
import { getReviews } from './../api/review.api'
export interface IProductStore {
  categories: IProductCategory[] | null
  reviews: IReviewDto[] | null
}

export const initialProductState: IProductStore = {
  categories: null,
  reviews: null,
}

export const getReviewsThunk = createAsyncThunk(
  'product/getReviewsThunk',
  async ({ limit, offset }: { limit?: number; offset?: number }) => {
    const { data } = await getReviews({ offset, limit })

    return {
      isMerge: !!offset,
      data,
    }
  },
)

export const productState = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    updateReviews(state, action: PayloadAction<IReviewDto[]>) {
      state.reviews = [...action.payload]
    },
  },
  extraReducers: (builder) => {
    // reviews
    builder.addCase(getReviewsThunk.fulfilled, (state, action: PayloadAction<any>) => {
      if (action.payload.data) {
        if (action.payload.isMerge) {
          state.reviews = [...(state.reviews || []), ...action.payload.data]
        } else {
          state.reviews = [...action.payload.data]
        }
      }
    })
  },
})

export const { updateReviews } = productState.actions

export default productState.reducer
