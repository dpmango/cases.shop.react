import { IProductPrice } from './Product'

export interface ITempOrder {
  product: ITempProduct
  platforms?: ITempPlatform[]
  instructions?: ITempInstructions
  form: ITempForm
  steamNote?: boolean
  balanceDeposit?: ITempBalance
}

export interface ITempProduct {
  category: {
    icon: string
    name: string
  }
  name: string
  price: IProductPrice
  icon: string
  description?: string
  features?: {
    title: string
    list: string[]
  }
  note?: string
}

export interface ITempPlatform {
  id: string
  name: string
}

export interface ITempInstructions {
  title: string
  text: string[] // HTML string span, a, bold, etc..
  list?: {
    title: string
    list: string[]
  }
  warning?: {
    title: string
    list: { text: string; link?: { name: string; href: string } }[]
  }
}

export interface ITempForm {
  title: string
  description?: string
  passwordNote?: boolean
  fields: Array<'login' | 'password' | 'recoverCodes'>
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
