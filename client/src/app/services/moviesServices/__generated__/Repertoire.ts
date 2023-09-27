/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Repertoire
// ====================================================

export interface Repertoire_getRepertoire {
  __typename: "Movie";
  title: string;
  id: number;
  poster_path: string;
  original_language: string;
  overview: string;
}

export interface Repertoire {
  getRepertoire: Repertoire_getRepertoire[];
}
