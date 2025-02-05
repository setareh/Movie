// src/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    password: '',
    isLoggedIn: false,
    status: 'idle',
    error: null
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    login(state) {
      if (state.username === 'admin' && state.password === '123456') {
        state.isLoggedIn = true;
        state.status = 'success'
      } else {
        state.error = 'Invalid username or password';
        state.status = 'failed'
      }
    },
    logout(state) {
      state.username = '';
      state.password = '';
      state.isLoggedIn = false;
      state.status = ''
    }
  },
});

export const { setUsername, setPassword, login, logout } = authSlice.actions;

export default authSlice.reducer;
