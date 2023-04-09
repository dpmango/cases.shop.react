export interface IInitDataDto {
  // id: number
  telegram_bot_link: string
  // footer: IFooterDto[]
  settings: {
    id: string
    value: {
      footerBG: string
      footerBGColor: string
      headerBG: string
      headerBGColor: string
      logo: string
      mainBG: string
      mainColor: string
      faqList: IFAQDto[]
      specialOffers: ISpecialOffersDto[]
    }
  }
}

export interface ISettingsDto {
  background_image: string
  footer_image: string
  reviews_footer_image: string
  faq_left_footer_image: string
  faq_right_footer_image: string
  item_right_footer_image: string
  footer_color: string
  header_color: string
  background_site_color: string
}

export type ISpecialOffersDto = string[]
export type IFAQDto = string[]

// export interface IFooterDto {
//   id: number
//   name: string
//   link: string
// }

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
}

// Profile
export interface IProfileDto {
  balance: number
  userName: string
  is_admin: number
}
