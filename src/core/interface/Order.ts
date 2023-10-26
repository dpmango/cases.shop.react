import { IProductCategory, IProductItem, IProductPrice } from './Product'

export interface ICreatedOrderDto {
  order_id: string
}

// форма отображения заказа
export interface IOrderDto {
  item: IProductItem
  category: IProductCategory
  platforms?: IOrderPlatform[]
  instructions?: IOrderInstruction[]
  form?: IOrderForm
  balanceDeposit?: ITempBalance
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
  fields: Array<'login' | 'password' | 'recoverCodes' | 'steam_login'>
}

export interface ITempBalance {
  min: number
  max: number
  commission: {
    type: 'percent' | 'fixed'
    value: number
  }
  bankFees?: {
    type: 'percent' | 'fixed'
    value: number
  }
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

export interface IUserOrderDto {
  id: string
  status: IOrderStatus
  created: number
  category: IProductCategory
  item: IProductItem
  ticket: null
}

export interface IOrderStatus {
  text: string
  description: string
  color: string
  like: boolean
}
