import { IPaymentMethod } from './Homepage'
import { IOrderDto } from './Order'

export interface IWhoisDto {
  id: string
}

export interface IInitDataDto {
  // id: number
  telegram_bot_link: string
  telegram_bot_id: string
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

export interface ISettingsDto {
  logo: string
  paymentLogo: string
  background_image: string
  background_site_color: string
  background_main: string
  footer_image: string
  reviews_footer_image: string
  faq_left_footer_image: string
  faq_right_footer_image: string
  product_footer_image: string
  footer_color: string
  header_color: string
  itemClip: string
  itemBGClip: string
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
  bonusBalance: number
  id: number
  is_admin: 1 | 0
  orders: IOrderDto[]
  status: boolean
  userName: string | null
}
