/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movies
// ====================================================

export interface Movies_getAllMovies {
  __typename: "Movie";
  title: string;
  _id: string;
  video: boolean;
  genre_ids: number[];
  id: number;
  original_title: string;
  popularity: number;
  release_date: string;
  inRepertoire: boolean | null;
}

export interface Movies {
  getAllMovies: Movies_getAllMovies[];
}
