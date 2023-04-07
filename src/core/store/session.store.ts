import * as toolkitRaw from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
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
  id: string
  name: string | null
  settings: ISettingsDto | Record<string, never>
  user: IProfileDto | null

  footer: IFooterDto[] | null
  slider: any[] | null
  faq: IFAQDto[]
  lastPurchases: any
  internal_name: string
}

const initialState: ISessionStore = {
  initializationPending: true,
  id: 'MurcciTGBot',
  name: null,
  settings: {},
  user: null,

  footer: null,
  slider: null,
  faq: [],

  internal_name: 'ShopCoreWeb_bot',
  lastPurchases: null,
}

// thunks
export const startApp = createAsyncThunk(
  'session/startapp',
  async ({ shopId }: { shopId: string }) => {
    const { data } = await initializeApp({ shopId })

    return data
  },
)

export const sessionState = toolkitRaw.createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser(state, action: toolkitRaw.PayloadAction<IProfileDto>) {
      state.user = { ...action.payload }
    },
    resetState(state, action: toolkitRaw.PayloadAction) {
      Cookies.remove('auth')
    },
    updateAnyState(state, action: toolkitRaw.PayloadAction<{ key: string; data: any }>) {
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
    builder.addCase(
      startApp.fulfilled,
      (state, action: toolkitRaw.PayloadAction<IInitDataDto | null>) => {
        state.initializationPending = false

        if (action.payload) {
          state = {
            ...state,
            ...action.payload,
          }
        }
      },
    )
  },
})

export const { resetState, setUser, updateAnyState } = sessionState.actions

export default sessionState.reducer
