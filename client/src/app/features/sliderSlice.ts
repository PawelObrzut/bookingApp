import { createSlice } from "@reduxjs/toolkit";
import { UpcomingMovies_getMoviesGtReleaseDate } from "../services/moviesServices/__generated__/UpcomingMovies";
import { fetchMoviesGtDate } from "../services/moviesServices";

const initialState = {
  slider: <UpcomingMovies_getMoviesGtReleaseDate[]>[],
  status: "idle",
  error: null,
};

const slider = createSlice({
  name: "SliderCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesGtDate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesGtDate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.slider = action.payload;
      })
      .addCase(fetchMoviesGtDate.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default slider.reducer;
