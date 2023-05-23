import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { getOrders, getProfile, initializeApp } from '@/core/api/session.api'
import {
  ICustomPageMetaDto,
  IFAQDto,
  IInitDataDto,
  IPaymentType,
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
  faqInfo: IFAQDto[]
  specialOffers: ISpecialOffersDto[]
  customPages: ICustomPageMetaDto[]
  paymentsType: IPaymentType[]

  user: IProfileDto | null
  lastPurchases: IOrderDto[] | null
}

export const initialSessionState: ISessionStore = {
  id: '',
  auth_bot: '',
  telegram_bot_link: '',
  settings: {
    logo: '',
    paymentLogo: '',
    background_site_color: '#000000',
    footer_color: '',
    header_color: '',
    background_image: '/img/decor/fire.png',
    background_main: '',
    footer_image: '/img/decor/fire-big.png',
    faq_left_footer_image: '/img/decor/man22.png',
    faq_right_footer_image: '/img/decor/image.png',
    product_footer_image: '/img/decor/fire55.png',
    reviews_footer_image: '/img/decor/fire-big2.png',
    itemClip: 'polygon(0% 0%, 100% 10%, 88% 100%, 6% 100%)',
  },
  faq: [],
  faqInfo: [],
  specialOffers: [],
  customPages: [],
  paymentsType: [],

  user: null,
  lastPurchases: null,
}

// thunks
export const startAppThunk = createAsyncThunk(
  'session/startAppThunk',
  async ({ shopId, site }: { shopId: string; site: string }) => {
    const { data } = await initializeApp({ shopId, site })

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
  const {
    faqList,
    faqInfo,
    specialOffers,
    customPages,
    logo,
    paymentLogo,
    footerBGColor,
    headerBGColor,
    mainColor,
    mainBG,
    headerBG,
    footerBG,
    footerBGFAQ,
    reviewBG,
    productBG,
    itemClip,
  } = payload.settings

  return {
    ...state,
    auth_bot: payload.telegram_bot_id,
    telegram_bot_link: payload.telegram_bot_link,
    settings: {
      ...state.settings,
      logo: logo,
      paymentLogo: paymentLogo,

      background_site_color: mainColor || '#000000',
      background_main: mainBG,
      footer_color: footerBGColor,
      header_color: headerBGColor,

      background_image: headerBG,
      footer_image: footerBG,
      faq_left_footer_image: footerBGFAQ,
      // faq_right_footer_image: footerBGFAQ,
      product_footer_image: productBG,
      reviews_footer_image: reviewBG,
      itemClip,
    },
    faq: faqList || [],
    faqInfo: faqInfo || [],
    specialOffers: specialOffers || [],
    customPages: customPages || [],
    paymentsType: payload.paymentsType || [],
  }
}

export const sessionState = createSlice({
  name: 'session',
  initialState: initialSessionState,
  reducers: {
    resetState(state, action: PayloadAction) {
      Cookies.remove('access_token')
      Cookies.remove('refresh_token')
    },
    updateAnyState: updateByDataType,
  },
  extraReducers: (builder) => {
    builder.addCase(
      startAppThunk.fulfilled,
      (state, action: PayloadAction<IInitDataDto | null>) => {
        if (action.payload) {
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

export const { resetState, updateAnyState } = sessionState.actions

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
