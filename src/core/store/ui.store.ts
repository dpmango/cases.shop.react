import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUiState {
  isHydrated: boolean | null
  mobileMenuActive: boolean
  modal: string | null
  modalParams: Record<string, never> | null
}

const initialState: IUiState = {
  isHydrated: null,
  mobileMenuActive: false,
  modal: 'balance',
  modalParams: {},
}

export const uiState = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHydrated(state, action: PayloadAction<boolean>) {
      state.isHydrated = action.payload
    },
    setMobileMenu(state, action: PayloadAction<boolean>) {
      state.mobileMenuActive = action.payload
    },
    setModal(state, action: PayloadAction<{ name: string; params?: any }>) {
      if (state.modal === action.payload.name) {
        state.modal = null
        state.modalParams = {}
      } else {
        state.modal = action.payload.name
        state.modalParams = action.payload.params || {}
      }
    },
    closeModals(state, action: PayloadAction) {
      state.modal = null
      state.modalParams = {}
    },
  },
})

export const { setHydrated, setMobileMenu, setModal, closeModals } = uiState.actions

export default uiState.reducer
