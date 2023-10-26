import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'

import { getProfile } from '@/core/api/session.api'
import { IProfileDto } from '@/core/interface/Initialization'

import { IPaymentMethod } from '../interface/Homepage'

export interface ISessionStore {
  auth_bot: string
  customPages: Array<string[]>
  paymentsMethods: IPaymentMethod[]
  user: IProfileDto | null
}

export const initialSessionState: ISessionStore = {
  auth_bot: '',
  customPages: [],
  paymentsMethods: [],
  user: null,
}

export const getProfileThunk = createAsyncThunk('session/getProfileThunk', async () => {
  const { data } = await getProfile()

  return data
})

const updateByDataType = (state: any, action: PayloadAction<{ key: string; data: any }>) => {
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
}

export const sessionState = createSlice({
  name: 'session',
  initialState: initialSessionState,
  reducers: {
    resetState(state, action: PayloadAction) {
      state.user = null
      deleteCookie('access_token')
      deleteCookie('refresh_token')
    },
    updateAnyState: updateByDataType,
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProfileThunk.fulfilled,
      (state, action: PayloadAction<IProfileDto | null>) => {
        if (action.payload) {
          state.user = { ...action.payload }
        }
      },
    )
  },
})

export const { resetState, updateAnyState } = sessionState.actions

export default sessionState.reducer
