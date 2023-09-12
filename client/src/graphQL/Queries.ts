import { gql } from "@apollo/client";

export const LOAD_MOVIES = gql`
  query {
    getAllMovies {
      id
      title
      overview
      video
    }
  }
`