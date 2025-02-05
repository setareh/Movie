// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import movieReducer from "./features/movieSlice";
import authReducer from "./features/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const persistedMovieReducer = persistReducer(persistConfig, movieReducer);

export const store = configureStore({
  reducer: {
    movie: persistedMovieReducer,
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);
