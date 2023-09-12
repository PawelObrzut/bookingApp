import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../apollo/apollo";
import { LOAD_MOVIES } from "../../graphQL/Queries";

interface Movie {
  id: number,
  title: string,
  overview: string,
  video: string
}

interface MoviesState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const { data } = await client.query({
    query: LOAD_MOVIES,
  });
  return data.movies;
})

const moviesSlice = createSlice({
  name: 'users',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  } as MoviesState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
    .addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload;
    })
  }
});

export default moviesSlice.reducer;