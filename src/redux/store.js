
'use client'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import temoignagesReducer from './slices/temoignagesSlice'

// Vérifier qu'on est côté client avant d'appeler localStorage
function loadState() {
  if (typeof window === 'undefined') return undefined
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch {
    return undefined
  }
}

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    temoignages: temoignagesReducer,
  },
  preloadedState,
})

if (typeof window !== 'undefined') {
  store.subscribe(() => {
    try {
      const state = store.getState()
      localStorage.setItem('reduxState', JSON.stringify(state))
    } catch {
      // ignore
    }
  })
}

export default store
