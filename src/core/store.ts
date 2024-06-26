import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import chatStore from '@/core/store/chat.store'
import productState from '@/core/store/product.store'
import sessionState from '@/core/store/session.store'
import uiState from '@/core/store/ui.store'

export const getStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      sessionState,
      productState,
      chatStore,
      uiState,
    },
    preloadedState,
  })
}

export const store = getStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
