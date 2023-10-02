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
        row
        seat
        available
      }
    }
  }
`;

export const SAVE_SEATS = gql`
  mutation SetSeats($seatsData: [String!]!, $showtimeUuid: String!) {
    saveSeats(seatsData: $seatsData, showtimeUuid: $showtimeUuid) {
      uuid
      seats {
        row
        seat
        available
      }
    }
  }
`;
