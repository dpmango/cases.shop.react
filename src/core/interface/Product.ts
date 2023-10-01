export interface IPopularProduct {
  category: IProductCategory
  item: IProductItem
}

export interface IProductCategory {
  id: string
  icon: null
  name: string
  description: string
  items: IProductItem[]
  categories: IProductCategory[]
  tags: null
}

export interface IProductItem {
  id: string
  name: string
  icon: string
  price: IProductPrice
}

export interface IProductPrice {
  price: number
  salePrice: number
}
