import type { IApiResponse } from '@/core/interface/Api'
import { IChatMessage, IThemeDto, ITicketDto } from '@/core/interface/Chat'

import { api } from './api'

// get dialogs list
export const getChatList = async () => {
  const { raw } = (await api(`ticket/list`, {}, true)) as { raw: ITicketDto[] }

  const error = raw ? null : 'error'

  return { data: raw, error }
}

export const getThemes = async () => {
  const { raw } = (await api(`ticket/themes`, {}, true)) as { raw: IThemeDto[] }

  const error = raw.length ? null : 'error'

  return { data: raw, error }
}

// get messages
export const getMessagesByDialog = async (id: string) => {
  const { raw } = (await api(
    `ticket/messages`,
    {
      params: {
        id,
        attachmentsV2: 'true',
      },
    },
    true,
  )) as { raw: IChatMessage[] }

  const error = raw ? null : 'error'

  return { data: raw, error }
}

// post message
export const postMessage = async (id: string, text: string, file?: File | null) => {
  let baseData = null

  if (file) {
    const toBase64 = (file: File) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
      })

    baseData = await toBase64(file)
  }

  const bodyRequest = {
    id,
    text,
  } as any

  // if (file?.type.includes('video')) {
  //   bodyRequest.video = baseData
  // } else {
  //   bodyRequest.photo = baseData
  // }

  const { raw, error } = (await api(
    `ticket/send`,
    {
      method: 'POST',
      body: bodyRequest,
    },
    true,
  )) as { raw: IChatMessage; error: any }

  return { data: raw, error }
}

// создать тикет

export interface ICreateTicket {
  name: string
  theme?: IThemeDto
}

export const createTicket = async ({ name, theme }: ICreateTicket) => {
  const { data, error, raw }: IApiResponse<any> = await api(
    `ticket/create`,
    {
      method: 'POST',
      body: {
        name,
        theme,
      },
    },
    true,
  )

  return { data: raw, error }
}

// прочитано
export const markRead = async ({ msgID }: { msgID: string }) => {
  const { raw } = (await api(
    `ticket/markread`,
    {
      method: 'GET',
      params: {
        msgID,
      },
    },
    true,
  )) as { raw: IChatMessage }

  const error = raw ? null : 'error'

  return { data: raw, error }
}

// Закрепить
export const pinTicket = async (id: string) => {
  const { raw } = (await api(
    `ticket/pin`,
    {
      method: 'POST',
      params: {
        id,
      },
    },
    true,
  )) as { raw: any }

  const error = raw ? null : 'error'

  return { data: raw, error }
}
