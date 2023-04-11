import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUiState {
  isHydrated: boolean | null
  modal: string | null
  modalParams: Record<string, never> | null
}

const initialState: IUiState = {
  isHydrated: null,
  modal: null,
  modalParams: {},
}

export const uiState = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHydrated(state, action: PayloadAction<boolean>) {
      state.isHydrated = action.payload
    },
    setModal(state, action: PayloadAction<{ name: string; params?: any }>) {
      state.modal = action.payload.name
      state.modalParams = action.payload.params || {}
    },
    closeModals(state, action: PayloadAction) {
      state.modal = null
      state.modalParams = {}
    },
  },
})

export const { setHydrated, setModal, closeModals } = uiState.actions

export default uiState.reducer
