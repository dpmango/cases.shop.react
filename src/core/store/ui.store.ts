import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUiState {
  mobileMenuActive: boolean
  modal: string | null
  modalParams: Record<string, never> | null
}

const initialState: IUiState = {
  mobileMenuActive: false,
  modal: null,
  modalParams: {},
}

export const uiState = createSlice({
  name: 'ui',
  initialState,
  reducers: {
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

export const { setMobileMenu, setModal, closeModals } = uiState.actions

export default uiState.reducer
