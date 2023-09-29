export interface IReviewDto {
  id: ID
  userId: number
  nick: string
  stars: number
  orderTime: string
  itemId: string
  ava: string
  text: string
  chatId: number
  messageId: number
  messageIds: number[]
  attachments: any[]
  fromAdmin: any[]
}

export interface ID {
  timestamp: number
  machine: number
  pid: number
  increment: number
  creationTime: Date
}
