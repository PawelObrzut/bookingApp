/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Showtimes
// ====================================================

export interface Showtimes_getShowtimesByMovieId {
  __typename: "Showtime";
  _id: string;
  movieId: number;
  theater: string;
  dateTime: string;
  duration: string;
}

export interface Showtimes {
  getShowtimesByMovieId: Showtimes_getShowtimesByMovieId[];
}

export interface ShowtimesVariables {
  movieId: number;
}
