import gql from "graphql-tag"

export const LOAD_MOVIES = gql`
  query getMovies {
    getMovies {
      id
      title
    }
  },
`
