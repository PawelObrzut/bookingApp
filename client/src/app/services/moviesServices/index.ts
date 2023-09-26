import client from "../../../apollo/apollo";
import { GET_ALL_MOVIES } from "../moviesServices/queries";
import { Movies_getAllMovies } from "../moviesServices/__generated__/Movies";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllMovies = createAsyncThunk(
  "fetchAllMovies",
  async () => {
    const response = await client
      .query({
        query: GET_ALL_MOVIES,
      })
      .catch((err) => {
        throw err;
      });
    if (response && response.data && response.data.getAllMovies) {
      return response.data.getAllMovies as Movies_getAllMovies[];
    }
    return [];
  }
);