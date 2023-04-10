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

export const initialSessionState: ISessionStore = {
  id: import.meta.env.VITE_SHOP_ID || '',
  auth_bot: import.meta.env.VITE_SHOP_AUTH_BOT || '',
  telegram_bot_link: '',
  settings: {
    logo: '',
    paymentLogo: '',
    background_site_color: '#000000',
    footer_color: '',
    header_color: '',
    background_image: '/img/decor/fire.png',
    footer_image: '/img/decor/fire-big.png',
    faq_left_footer_image: '/img/decor/man22.png',
    faq_right_footer_image: '/img/decor/image.png',
    item_right_footer_image: '/img/decor/fire55.png',
    reviews_footer_image: '/img/decor/fire-big2.png',
  },
  faq: [],
  specialOffers: [],

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

export const covertInitDto = (state: any, payload: IInitDataDto) => {
  const createImgLink = (img: string) => {
    if (!img) return ''
    return `${import.meta.env.VITE_ASSETS_URL}${img}`
  }

  const { faqList, specialOffers, logo, paymentLogo, footerBGColor, headerBGColor, mainColor } =
    payload.settings

  return {
    ...state,
    telegram_bot_link: payload.telegram_bot_link,
    settings: {
      ...state.settings,
      logo: createImgLink(logo),
      paymentLogo: createImgLink(paymentLogo),

      background_site_color: mainColor,
      footer_color: footerBGColor,
      header_color: headerBGColor,
    },
    faq: faqList || [],
    specialOffers: specialOffers || [],
  }
}

export const sessionState = createSlice({
  name: 'session',
  initialState: initialSessionState,
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
          const covertedSessionState = covertInitDto(state, action.payload)

          state = {
            ...covertInitDto(state, action.payload),
          }
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
          state.lastPurchases = [...action.payload]
        }
      },
    )
  },
})

export const { resetState, setUser, updateAnyState } = sessionState.actions

export default sessionState.reducer

// TODO - mapping
// Object.keys(action.payload).forEach((key) => {
//   // @ts-ignore
//   const dataValue = action.payload[key]
//   updateByDataType(state, {
//     payload: { key, data: dataValue },
//     type: '',
//   })
// })
