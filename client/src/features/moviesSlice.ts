import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../apollo/apollo";
import { LOAD_MOVIES } from "../graphQL/Queries";
import { IMovie } from "../types/types";

const initialState = {
  movies: [] as IMovie[],
  status: "idle",
  error: null,
};

export const loadMovies = createAsyncThunk("movies/loadMovies", async () => {
  const response = await client.query({
    query: LOAD_MOVIES,
  });
  return response.data.getMovies;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(loadMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default moviesSlice.reducer;
