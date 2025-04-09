

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,              // L'utilisateur actuellement connecté
  registeredUsers: [],     // Stocke tous les comptes enregistrés
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
      const { name, email, password } = action.payload;
      // Vérifier si un compte avec cet email existe déjà
      const exists = state.registeredUsers.find(u => u.email === email);
      if (exists) {
        state.error = "Cet email est déjà enregistré.";
      } else {
        const newUser = { name, email, password };
        state.registeredUsers.push(newUser);
        state.isAuthenticated = true;
        state.user = newUser;
        state.error = null;
      }
    },
    login(state, action) {
      const { email, password } = action.payload;
      // Chercher dans le tableau registeredUsers le compte correspondant
      const found = state.registeredUsers.find(u => u.email === email && u.password === password);
      if (!found) {
        state.error = "Email ou mot de passe incorrect.";
        state.isAuthenticated = false;
        state.user = null;
      } else {
        state.isAuthenticated = true;
        state.user = found;
        state.error = null;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  },
})

export const { register, login, logout, setError } = authSlice.actions;
export default authSlice.reducer;
