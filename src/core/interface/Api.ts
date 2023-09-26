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

interface PromiseFulfilledResult<T> {
  status: 'fulfilled'
  value: { data: T | any; error: IError | null }
}

interface PromiseRejectedResult {
  status: 'rejected'
  reason: any
}

export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult
