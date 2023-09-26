import gql from 'graphql-tag';

export const GET_ALL_MOVIES = gql`
  query Movies {
    getAllMovies {
      title,
      _id,
      video,
      genre_ids,
      id,
      original_title,
      popularity,
      release_date,
      inRepertoire,
    }
  }
`

export const GET_MOVIES_GT_DATE = gql`
  query UpcomingMovies($date: String!) {
    getMoviesGtReleaseDate(date: $date) {
      title,
      id,
      release_date,
      poster_path
    }
  }
`