import { IProductCategory } from '@/core/interface/Product'

export interface IHomePageDto {
  title: string
  tutorial: ITutorial
  categories: IProductCategory[]
  faq: Array<string[]>
  pages: Array<string[]>
  paymentMethods: IPaymentMethod[]
  telegram_bot: {
    id: string
    link: string
  }
}

export interface ITutorial {
  items: Array<string[]>
  title: string
}

export interface IPaymentMethod {
  id: string
  name: string
  icon: string
  min: number
  max: number
  customPageId: string
}

export interface IReviewDto {
  nick: string
  ava: string
  date: number
  text: string
  stars: number
}
