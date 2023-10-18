export interface ITicketDto {
  id: string
  title: string
  status: number
  created: Date
  modified: Date
  unreadMessages: number
  lastMessage: string
  isPinned: boolean
  theme: IThemeDto
}

export interface IError {
  title: string
  message: string
}

export interface IAttachment {
  src: string
  width: number
  height: number
  alt: string
  type: 'video' | 'photo' | 'file'
}

export interface IChatMessage {
  id: string
  isOut: boolean
  isSeen: boolean
  text: string
  created: string
  attachments: IAttachment[]
  error: IError | null
  from: {
    id: string
    name: string
  }
}

export interface Order {
  id: string
  itemName: string
  status: string
  created: Date
  updated: Date
  comment: null
  amount: number
}
export interface Payment {
  id: string
  amount: number
  status: string
  created: string
}

export interface IThemeDto {
  id: number
  name: string
}
