import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../apollo/apollo";
import { LOAD_MOVIES } from "../graphQL/Queries";

interface Reviews {
  id: string
  author: string
  rating: number
  comment: string
}

interface Movie {
  id: number
  adult: boolean
  backdrop_path: string
  genres: string[]
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: string
  vote_average: number
  vote_count: number
  reviews: Reviews[]
}

const initialState = {
  movies: [] as Movie[],
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
