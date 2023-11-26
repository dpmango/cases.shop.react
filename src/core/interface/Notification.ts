import { IProductCategory, IProductDto, IProductItem } from './Product'

export interface INotificationDto {
  id: string
  created: number
  seen: boolean
  banner: string

  item: IProductItem
  category?: IProductCategory
}
