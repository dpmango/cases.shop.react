import { IProductCategory, IProductItem, IProductPrice } from './Product'

export interface ICreatedOrderDto {
  order_id: string
}

// форма отображения заказа
export interface IOrderDto {
  item: IProductItem
  category: IProductCategory
  platforms?: IOrderPlatform[] | null
  instructions?: IOrderInstruction[]
  form?: IOrderForm
}

export interface IOrderPlatform {
  id: string
  name: string
}

export interface IOrderInstruction {
  title: string
  texts: string[] // HTML string span, a, bold, etc..
  caution?: {
    title: string
    list: string[]
  }[]
  warning?: {
    title: string
    list: { text: string; link?: { name: string; href: string } }[]
  }[]
}

export interface IOrderForm {
  title: string
  description?: string
  passwordNote?: boolean
  fields: Array<'login' | 'password' | 'recoverCodes' | 'steam-login' | 'steam-amount'>
}

// export interface ITempProduct {
//   category: {
//     icon: string
//     name: string
//   }
//   name: string
//   price: IProductPrice
//   icon: string
//   description?: string
//   features?: {
//     title: string
//     list: string[]
//   }
//   note?: string
// }

// commissions
export interface ISteamRatesDto {
  bank: number
  comissions: IComission[]
}

export interface IComission {
  amount: number
  service: number
}

export interface IUserOrderDto {
  id: string
  status: IOrderStatus
  created: number
  category: IProductCategory | null
  item: IProductItem
  ticket: IOrderTicket | null
}

export interface IOrderStatus {
  text: string
  description: string
  color: string
  like: boolean
}

export interface IOrderTicket {
  id: string
  last_message: string
  name: string
}
