import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies_movies } from "../../services/moviesServices/__generated__/getAllMovies";
// import client from "../../../apollo/apollo";
// import { LOAD_MOVIES } from "../../services/upcommingMoviesServices/queries";

// export const fetchUpcomingMovies = createAsyncThunk(
//   "fetchUpcomingMovies",
//   async () => {
//     const response = await client
//       .query({
//         query: LOAD_MOVIES,
//       })
//       .catch((err) => {
//         throw err;
//       });
//     if (response && response.data && response.data.getAllMovies) {
//       return response.data.getAllMovies as getAllMovies_movies[];
//     }
//     return [];
//   }
// );

const initialState = {
  upcomingMovies: <getAllMovies_movies[]>[],
  status: "idle",
  error: null,
};

const repertoire = createSlice({
  name: "RepertoirePage",
  initialState,
  reducers: {
    // setUpcomingMovies: (state, action) => {
    //   state.upcomingMovies = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { setUpcomingMovies } = repertoire.actions;
export default repertoire.reducer;
