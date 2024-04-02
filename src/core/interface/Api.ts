export interface IReqPagination {
  limit?: number
  offset?: number
}

export interface IError {
  code: number
  message: string
  raw: any
}

export interface IApiResponse<T> {
  status: boolean
  data: T | null
  error: IError | null
  raw: T
}

interface PromiseFulfilledResult<T> {
  status: 'fulfilled'
  value: { data: T | any; error: IError | null }
}

interface PromiseRejectedResult {
  status: 'rejected'
  reason: any
}

export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult

export interface IPromiseFactory {
  name: string
  resolver: Promise<{ data: any; error: IError | null }>
  errorRouter?: {
    redirectTo?: string
    fatal?: boolean
  }
}

export interface IBooleanResponse {
  status: boolean
  msg?: string
}
