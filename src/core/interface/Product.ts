export interface IProductCategoryDto {
  categoryName: string
  categoryColor: string
  items: IProductDto[]
}

export interface IProductDto {
  id: string
  name: string
  images: string[]
  price: number
  salePrice: number
}

export interface IProductFullDto extends IProductDto {
  description: string
}

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
  categories: any[]
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
