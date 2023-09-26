/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UpcomingMovies
// ====================================================

export interface UpcomingMovies_getMoviesGtReleaseDate {
  __typename: "Movie";
  title: string;
  id: number;
  release_date: string;
}

export interface UpcomingMovies {
  getMoviesGtReleaseDate: UpcomingMovies_getMoviesGtReleaseDate[];
}

export interface UpcomingMoviesVariables {
  date: string;
}
