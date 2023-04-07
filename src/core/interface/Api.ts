export interface IApiDto {
  response: boolean
  statusCode: number
  data: any
}

export interface IError {
  code: number
  message: string
  raw: any
}

export interface IApiResponse<T> {
  data: T | null
  error: IError | null
  raw: T
}
