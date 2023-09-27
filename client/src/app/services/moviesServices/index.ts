import client from "../../../apollo/apollo";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_MOVIES, GET_MOVIES_GT_DATE, GET_REPERTOIRE } from "../moviesServices/queries";
import { Movies_getAllMovies } from "../moviesServices/__generated__/Movies";
import { UpcomingMovies_getMoviesGtReleaseDate } from "../moviesServices/__generated__/UpcomingMovies";
import { Repertoire_getRepertoire } from "../moviesServices/__generated__/Repertoire";

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
});

export const fetchMoviesGtDate = createAsyncThunk(
  "fetchMoviesGtDate",
  async (date: string) => {
    const response = await client
      .query({
        query: GET_MOVIES_GT_DATE,
        variables: {
          date: date
        },
      })
      .catch((err) => {
        throw err;
      });
    if (response && response.data && response.data.getMoviesGtReleaseDate) {
      return response.data.getMoviesGtReleaseDate as UpcomingMovies_getMoviesGtReleaseDate[];
    }
    return [];
  }
);

export const fetchRepertoire = createAsyncThunk(
  "fetchRepertoire",
  async (inRepertoire: boolean) => {
    const response = await client
      .query({
        query: GET_REPERTOIRE,
        variables: {
          inRepertoire: inRepertoire
        }
      })
      .catch((err) => {
        throw err;
      })
      if (response && response.data && response.data.getRepertoire) {
        return response.data.getRepertoire as Repertoire_getRepertoire[];
      }
      return [];
  }
)