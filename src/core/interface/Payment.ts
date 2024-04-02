export interface IPaymentDto {
  id: string
  url: string
}

export interface IPaymentStatusDto {
  id: string
  url: string
  completed: boolean
  comment: string
}
