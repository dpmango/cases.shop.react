import { IPopularProduct, IProductCategory } from '@/core/interface/Product'

export interface IHomePageDto {
  title: string
  tutorial: ITutorial
  categories: IProductCategory[]
  popularItems: IPopularProduct[]
  reviews: IReviewShort[]
  faq: Array<string[]>
  pages: Array<string[]>
  paymentMethods: IPaymentMethod[]
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
}

export interface IReviewShort {
  nick: string
  ava: string
  date: number
  text: string
  stars: number
}
