import { createSlice } from "@reduxjs/toolkit";
import { Movies_getAllMovies } from "../services/moviesServices/__generated__/Movies";
import { fetchAllMovies } from "../services/moviesServices";

const initialState = {
  movies: <Movies_getAllMovies[]>[],
  status: "idle",
  error: null,
};

const movies = createSlice({
  name: "AllMoviesCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});


export default movies.reducer;
