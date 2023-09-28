import gql from "graphql-tag";

export const GET_SHOWTIMES = gql`
  query Showtimes($movieId: Int!) {
    getShowtimesByMovieId(movieId: $movieId) {
      _id
      movieId
      theater
      dateTime
      duration
      availableSeats
      totalSeats
    }
  }
`;
