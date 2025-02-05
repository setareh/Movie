// src/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
    isLoggedIn: false,
    status: "idle",
    favorites: [],
    error: null,
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    login(state) {
      if (state.username === "admin" && state.password === "123456") {
        state.isLoggedIn = true;
        state.status = "success";
      } else {
        state.error = "Invalid username or password";
        state.status = "failed";
      }
    },
    logout(state) {
      state.username = "";
      state.password = "";
      state.isLoggedIn = false;
      state.status = "";
    },
    toggleFavorites(state, action) {
      const movie = action.payload;
      const isFavorite = state.favorites.some((fav) => fav.imdb === movie.imdb);
      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (fav) => fav.imdb === movie.imdb
        );
      } else {
        state.favorites = [...state.favorites, movie];
      }
    },
  },
});

export const { setUsername, setPassword, login, logout, toggleFavorites } =
  authSlice.actions;

export default authSlice.reducer;
