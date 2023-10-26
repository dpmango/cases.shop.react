export interface IPopularProduct {
  category: IProductCategory
  item: IProductItem
}

export interface IProductCategory {
  id: string
  icon: string | null
  name: string
  description: string
  items: IProductItem[]
  categories: IProductCategory[]
  tags: { [key: string]: string | number } | null
  backgrounds?: any | null
}

export interface IProductItem {
  id: string
  name: string
  icon: string
  price: IProductPrice
  tags: { [key: string]: string | number }
  description?: string
  features?: any // todo
  note?: string // todo
}

export interface IProductPrice {
  price: number
  salePrice: number
}
