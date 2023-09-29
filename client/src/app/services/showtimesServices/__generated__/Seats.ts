/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Seats
// ====================================================

export interface Seats_getSeatsByShowtimeId_seats {
  __typename: "Seat";
  row: number;
  seat: number;
  available: boolean;
}

export interface Seats_getSeatsByShowtimeId {
  __typename: "Showtime";
  seats: Seats_getSeatsByShowtimeId_seats[];
}

export interface Seats {
  getSeatsByShowtimeId: Seats_getSeatsByShowtimeId;
}

export interface SeatsVariables {
  showtimeId: string;
}
