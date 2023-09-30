import gql from "graphql-tag";

export const GET_SHOWTIMES = gql`
  query Showtimes($movieId: Int!) {
    getShowtimesByMovieId(movieId: $movieId) {
      _id
      uuid
      movieId
      theater
      dateTime
      duration
    }
  }
`;

export const GET_SEATS = gql`
  query Seats($showtimeUuid: String!) {
    getSeatsByShowtimeUuid(showtimeUuid: $showtimeUuid) {
      seats {
        row,
        seat,
        available
      }
    }
  }
`