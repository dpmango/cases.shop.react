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
  id: number
  name: string | null
  settings: ISettingsDto | Record<string, never>
  user: IProfileDto | null

  footer: IFooterDto[] | null
  slider: any[] | null
  faq: IFAQDto[]
  is_main: boolean | null
  lastPurchases: any
  internal_name: string | null
}

const initialState: ISessionStore = {
  initializationPending: true,
  id: 3,
  name: null,
  settings: {},
  user: null,
  is_main: false,

  footer: null,
  slider: null,
  faq: [],

  internal_name: null,
  lastPurchases: null,
}

// thunks
export const startApp = createAsyncThunk('session/startapp', async () => {
  const { data } = await initializeApp()

  return data
})

export const sessionState = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IProfileDto>) {
      state.user = { ...action.payload }
    },
    resetState(state, action: PayloadAction) {
      Cookies.remove('auth')
    },
    updateAnyState(state, action: PayloadAction<{ key: string; data: any }>) {
      if (Array.isArray(action.payload.data)) {
        // @ts-ignore
        state[action.payload.key] = [...action.payload.data]
      } else if (typeof action.payload.data === 'object') {
        // @ts-ignore
        state[action.payload.key] = { ...action.payload.data }
      } else {
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
