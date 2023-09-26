import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { IProductCategoryDto } from '../interface/Product'
import { IReviewDto } from '../interface/Review'

export interface IProductStore {
  items: IProductCategoryDto[] | null
  reviews: IReviewDto[] | null
}

export const initialProductState: IProductStore = {
  items: null,
  reviews: null,
}

// thunks
export const getProductsThunk = createAsyncThunk(
  'prodcut/getProductsThunk',
  async ({ shopId }: { shopId: string }) => {
    const { data } = await getProducts({ shopId })

    return data
  },
)

export const getReviewsThunk = createAsyncThunk(
  'product/getReviewsThunk',
  async ({ shopId, limit, offset }: { shopId: string; limit?: number; offset?: number }) => {
    const { data } = await getReviews({ shopId, offset, limit })

    return {
      isMerge: offset,
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
    // Catalog* like with Product Dto's
    builder.addCase(
      getProductsThunk.fulfilled,
      (state, action: PayloadAction<IProductCategoryDto[] | null>) => {
        if (action.payload) {
          state.items = [...action.payload]
        }
      },
    )
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
