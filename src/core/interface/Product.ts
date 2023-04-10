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
