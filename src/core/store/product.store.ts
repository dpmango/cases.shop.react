import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { IProductCategoryDto } from '../interface/Product'
import { IReviewDto } from '../interface/Review'

export interface IProductStore {
  productsFetching: boolean
  items: IProductCategoryDto[] | null
  reviewsFetching: boolean
  reviews: IReviewDto[] | null
}

export const initialProductState: IProductStore = {
  productsFetching: true,
  items: null,
  reviewsFetching: true,
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
  async ({ shopId }: { shopId: string }) => {
    const { data } = await getReviews({ shopId })

    return data
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
    builder.addCase(getProductsThunk.pending, (state) => {
      state.productsFetching = true
    })
    builder.addCase(
      getProductsThunk.fulfilled,
      (state, action: PayloadAction<IProductCategoryDto[] | null>) => {
        if (action.payload) {
          state.items = [...action.payload]
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
      (state, action: PayloadAction<IReviewDto[] | null>) => {
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
