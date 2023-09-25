import gql from "graphql-tag";

export const LOAD_MOVIES = gql`
  query movies {
    getAllMovies {
      title
      _id
      video
      genre_ids
      id
      original_title
      popularity
      release_date
    }
  }
`;
