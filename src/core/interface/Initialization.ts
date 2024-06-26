import { IPaymentMethod } from './Homepage'

export interface IWhoisDto {
  id: string
}

export interface IInitDataDto {
  // id: number
  paymentsMethods: IPaymentMethod[]
  settings: {
    logo: string
    mainBG: string
    mainColor: string
    headerBG: string
    headerBGColor: string
    footerBG: string
    footerBGColor: string
    paymentLogo: string
    footerBGFAQ: string
    reviewBG: string
    productBG: string
    agreementHtml: string
    customPages: ICustomPageMetaDto[]
    itemClip: string
    itemBGClip: string
  }
}

export type ICustomPageMetaDto = string[]

// auth
export interface ITelegramAuthDto {
  id: number
  hash: string
  auth_date: number
  first_name: string
  last_name?: string
  photo_url?: string
  username?: string
}

export interface IAuthDto {
  access_token: string
  refresh_token: string
  expires_at: string
  expires_in: number
  refresh_expires: number
  refresh_expires_at: string
}

// Profile
export interface IProfileDto {
  balance: number
  id: string
  email: string
  notifications: number
  orders: number
  favourites: {
    category: number
    items: number
  }
}
