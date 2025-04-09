
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  temoignages: [],
}

const temoignagesSlice = createSlice({
  name: 'temoignages',
  initialState,
  reducers: {
    addTemoignage(state, action) {
      state.temoignages.push(action.payload)
    },
    updateTemoignage(state, action) {
      const { id, nom, message, note } = action.payload
      const index = state.temoignages.findIndex(t => t.id === id)
      if (index !== -1) {
        state.temoignages[index] = { id, nom, message, note }
      }
    },
    deleteTemoignage(state, action) {
      state.temoignages = state.temoignages.filter(t => t.id !== action.payload)
    },
    // NOUVELLE ACTION : effacer complètement la liste
    clearTemoignages(state) {
      state.temoignages = []
    }
  },
})

export const {
  addTemoignage,
  updateTemoignage,
  deleteTemoignage,
  clearTemoignages,
} = temoignagesSlice.actions

export default temoignagesSlice.reducer
