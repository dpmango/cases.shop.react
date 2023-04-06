import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { fetchAuth, initializeApp } from '@/core/api/session.api'
import {
  IFAQDto,
  IFooterDto,
  IInitDataDto,
  IProfileDto,
  ISettingsDto,
} from '@/core/interface/Initialization'

export interface ISessionStore {
  initializationPending: boolean
  id: number | null
  name: string | null
  settings: ISettingsDto | Record<string, never>
  user: IProfileDto | null

  footer: IFooterDto[] | null
  slider: any[] | null
  faq: IFAQDto[]
  is_main: boolean | null
  lastPurchases: any
  internal_name: string | null

  items: any
  reviews: any
}

const initialState: ISessionStore = {
  initializationPending: true,
  id: null,
  name: null,
  settings: {},
  user: null,
  is_main: false,

  footer: null,
  slider: null,
  faq: [],
  items: null,
  reviews: null,

  internal_name: null,
  lastPurchases: null,
}

// thunks
export const startApp = createAsyncThunk('session/startapp', async () => {
  const { data } = await initializeApp()

  return data
})

export const sessionState = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IProfileDto>) {
      state.user = { ...action.payload }
    },
    resetState(state, action: PayloadAction) {
      Cookies.remove('auth')
    },
    updateAnyState(state, action: PayloadAction<{ key: string; data: any }>) {
      // @ts-ignore
      if (state[action.payload.key]) {
        // @ts-ignore
        state[action.payload.key] = action.payload.data
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startApp.pending, (state) => {
      state.initializationPending = true
    })
    builder.addCase(startApp.fulfilled, (state, action: PayloadAction<IInitDataDto | null>) => {
      state.initializationPending = false

      if (action.payload) {
        state = {
          ...state,
          ...action.payload,
        }
      }
    })
  },
})

export const { resetState, setUser, updateAnyState } = sessionState.actions

export default sessionState.reducer
