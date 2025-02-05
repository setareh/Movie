// src/movieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'be6dda4f'; // Replace with your OMDB API key

export const fetchMovie = createAsyncThunk(
  'movie/fetchMovie',
  async (title) => {
    const response = await axios.get(`https://www.omdbapi.com/?&apikey=${API_KEY}`,{
        params:{
            t:title
        }
    });
    return response.data;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default movieSlice.reducer;
