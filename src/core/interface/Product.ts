export interface IProductListDto {
  [key: string]: IProductDto[]
}

export interface IProductDto {
  id: string
  description: string
  name: string
  images: string[]
  price: number
  salePrice: number
  images_ids: number[]
}
