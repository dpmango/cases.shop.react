import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import Cookies from 'js-cookie'

import { ISelectOption } from '@/components/Ui/Select'
import { getChatList, getMessagesByDialog, getThemes, markRead } from '@/core/api/chat.api'
import { IChatMessage, IThemeDto, ITicketDto } from '@/core/interface/Chat'

export interface IChat {
  loading: boolean | null
  chatList: ITicketDto[]
  activeDialog: ITicketDto | null
  dialogMessages: IChatMessage[]
  themes: ISelectOption[]
}

export const getChatListService = createAsyncThunk('chat/list', async () => {
  const { data, error } = await getChatList()

  return data
})

export const getChatMessagesService = createAsyncThunk('chat/dialog', async (id: string) => {
  const { data, error } = await getMessagesByDialog(id)

  return data ? data : []
})

export const getThemesService = createAsyncThunk('chat/themes', async () => {
  const { data, error } = await getThemes()

  return data
})

export const markReadService = createAsyncThunk(
  'chat/read',
  async ({ msgID }: any, { getState }) => {
    const { data, error } = await markRead({ msgID })

    return data
  },
)

const initialState: IChat = {
  loading: null,
  chatList: [],
  activeDialog: null,
  dialogMessages: [],
  themes: [],
}

const typeWeight = (ticket: ITicketDto) => {
  if (ticket.status === 1) {
    return 0.5
  }
  return 1
}

export const chatState = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    resetUser(state, action: PayloadAction) {
      state.loading = false
      state.chatList = []
    },
    setActiveDialog(state, action: PayloadAction<ITicketDto | null>) {
      state.activeDialog = action.payload
    },
    setPinToggle(state, action: PayloadAction<string>) {
      const newList = state.chatList.map((x) =>
        x.id === action.payload ? { ...x, isPinned: !x.isPinned } : x,
      )

      state.chatList = [...newList]
        .sort((a, b) => (a.created > b.created ? 1 : -1))
        .sort((a, b) => (typeWeight(a) < typeWeight(b) ? 1 : -1))
        .sort((a, b) => (a.isPinned > b.isPinned ? -1 : 1))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatListService.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getChatListService.fulfilled, (state, action: PayloadAction<ITicketDto[]>) => {
      state.loading = false

      if (action.payload) {
        state.chatList = [...action.payload]
          .sort((a, b) => (a.created > b.created ? 1 : -1))
          .sort((a, b) => (typeWeight(a) < typeWeight(b) ? 1 : -1))
          .sort((a, b) => (a.isPinned > b.isPinned ? -1 : 1))
      }
    })
    builder.addCase(
      getChatMessagesService.fulfilled,
      (state, action: PayloadAction<IChatMessage[]>) => {
        if (action.payload) {
          state.dialogMessages = [...action.payload]
        }
      },
    )
    builder.addCase(getThemesService.fulfilled, (state, action: PayloadAction<IThemeDto[]>) => {
      if (action.payload) {
        state.themes = [
          ...action.payload.map((x) => ({
            value: x.id,
            label: x.name,
          })),
        ]
      }
    })
  },
})

export const { setActiveDialog, setPinToggle, resetUser } = chatState.actions

export default chatState.reducer
