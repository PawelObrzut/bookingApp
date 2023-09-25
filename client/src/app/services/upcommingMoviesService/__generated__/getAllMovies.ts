/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllMovies
// ====================================================

export interface getAllMovies_movies {
  __typename: "UpcomingMovie";
  title: string;
  _id: string;
  video: string;
  genre_ids: string[];
  id: number;
  original_title: string;
  popularity: number;
  release_date: string;
}

export interface getAllMovies {
  movies: getAllMovies_movies[];
}
