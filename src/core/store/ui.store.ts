import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUiState {
  modal: string[]
  modalParams: Record<string, never> | null
}

const initialState: IUiState = {
  modal: [''],
  modalParams: {},
}

export const uiState = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<{ name: string; params?: any }>) {
      state.modal = [action.payload.name]
      state.modalParams = action.payload.params || {}
    },
    closeModals(state, action: PayloadAction) {
      state.modal = []
      state.modalParams = {}
    },
  },
})

export const { setModal, closeModals } = uiState.actions

export default uiState.reducer
