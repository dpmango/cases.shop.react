import * as toolkitRaw from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { initializeApp } from '@/core/api/session.api'
import { IFAQDto, IInitDataDto, IProfileDto, ISettingsDto } from '@/core/interface/Initialization'

export interface ISessionStore {
  initializationPending: boolean
  id: string
  settings: ISettingsDto
  faq: IFAQDto[]
  bot_connector_name: string
  telegram_bot_link: string
  user: IProfileDto | null
  lastPurchases: any
}

const initialState: ISessionStore = {
  initializationPending: true,
  id: 'MurcciTGBot',
  settings: {
    background_site_color: '#000000',
    header_color:
      'radial-gradient( 78.79% 1603.12% at 18.89% 71.76%, #eb5f0e 0%, #851012 51.82%, #480136 100%)',
    background_image: '/img/decor/fire.png',
    footer_image: '/img/decor/fire.png',
    faq_left_footer_image: '/img/decor/man22.png',
    faq_right_footer_image: '/img/decor/image.png',
    item_right_footer_image: '/img/decor/fire55.png',
    reviews_footer_image: '/img/decor/fire-big2.png',
    footer_color: '',
  },
  faq: [],
  bot_connector_name: 'ShopCoreWeb_bot',
  telegram_bot_link: '',

  user: null,
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
