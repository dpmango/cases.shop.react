import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { getOrders, getProfile, initializeApp } from '@/core/api/session.api'
import {
  IFAQDto,
  IInitDataDto,
  IProfileDto,
  ISettingsDto,
  ISpecialOffersDto,
} from '@/core/interface/Initialization'
import { IOrderDto } from '@/core/interface/Order'

export interface ISessionStore {
  id: string
  auth_bot: string
  telegram_bot_link: string
  settings: ISettingsDto
  faq: IFAQDto[]
  specialOffers: ISpecialOffersDto[]

  user: IProfileDto | null
  lastPurchases: IOrderDto[] | null
}

export const initialState: ISessionStore = {
  id: 'Khmelevskoy',
  settings: {
    background_site_color: '#000000',
    footer_color: '',
    header_color:
      'radial-gradient( 78.79% 1603.12% at 18.89% 71.76%, #eb5f0e 0%, #851012 51.82%, #480136 100%)',
    background_image: '/img/decor/fire.png',
    footer_image: '/img/decor/fire-big.png',
    faq_left_footer_image: '/img/decor/man22.png',
    faq_right_footer_image: '/img/decor/image.png',
    item_right_footer_image: '/img/decor/fire55.png',
    reviews_footer_image: '/img/decor/fire-big2.png',
  },
  faq: [],
  specialOffers: [],
  auth_bot: 'casesAuth_bot',
  telegram_bot_link: '',

  user: null,
  lastPurchases: null,
}

// thunks
export const startAppThunk = createAsyncThunk(
  'session/startAppThunk',
  async ({ shopId }: { shopId: string }) => {
    const { data } = await initializeApp({ shopId })

    return data
  },
)

export const getProfileThunk = createAsyncThunk('session/getProfileThunk', async () => {
  const { data } = await getProfile()

  return data
})

export const getOrdersThunk = createAsyncThunk(
  'session/getOrdersThunk',
  async ({ shopId }: { shopId: string }) => {
    const { data } = await getOrders({ shopId })

    return data
  },
)

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
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IProfileDto>) {
      state.user = { ...action.payload }
    },
    resetState(state, action: PayloadAction) {
      Cookies.remove('auth')
    },
    updateAnyState: updateByDataType,
  },
  extraReducers: (builder) => {
    builder.addCase(
      startAppThunk.fulfilled,
      (state, action: PayloadAction<IInitDataDto | null>) => {
        if (action.payload) {
          updateByDataType(state, {
            payload: { key: 'telegram_bot_link', data: action.payload.telegram_bot_link },
            type: '',
          })

          updateByDataType(state, {
            payload: { key: 'faq', data: action.payload.settings.value.faqList || [] },
            type: '',
          })

          updateByDataType(state, {
            payload: {
              key: 'settings',
              data: {
                ...state.settings,
                // background_image: action.payload.settings.value.footerBG,
                // footer_image: action.payload.settings.value.footerBG,
                // reviews_footer_image: action.payload.settings.value.footerBG,
                // faq_left_footer_image: action.payload.settings.value.footerBG,
                // faq_right_footer_image: action.payload.settings.value.footerBG,
                // item_right_footer_image: action.payload.settings.value.footerBG,

                footer_color: action.payload.settings.value.footerBGColor,
                header_color: action.payload.settings.value.headerBGColor,
              },
            },
            type: '',
          })

          // TODO - mapping
          // Object.keys(action.payload).forEach((key) => {
          //   // @ts-ignore
          //   const dataValue = action.payload[key]
          //   updateByDataType(state, {
          //     payload: { key, data: dataValue },
          //     type: '',
          //   })
          // })
        }
      },
    )
    builder.addCase(
      getProfileThunk.fulfilled,
      (state, action: PayloadAction<IProfileDto | null>) => {
        if (action.payload) {
          state.user = { ...action.payload }
        }
      },
    )
    builder.addCase(
      getOrdersThunk.fulfilled,
      (state, action: PayloadAction<IOrderDto[] | null>) => {
        if (action.payload) {
          state.lastPurchases = [...action.payload, ...action.payload, ...action.payload] // todo - only for dev pruporses
        }
      },
    )
  },
})

export const { resetState, setUser, updateAnyState } = sessionState.actions

export default sessionState.reducer
