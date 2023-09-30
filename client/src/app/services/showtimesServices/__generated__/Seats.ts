/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Seats
// ====================================================

export interface Seats_getSeatsByShowtimeUuid_seats {
  __typename: "Seat";
  row: number;
  seat: number;
  available: boolean;
}

export interface Seats_getSeatsByShowtimeUuid {
  __typename: "Showtime";
  seats: Seats_getSeatsByShowtimeUuid_seats[];
}

export interface Seats {
  getSeatsByShowtimeUuid: Seats_getSeatsByShowtimeUuid;
}

export interface SeatsVariables {
  showtimeUuid: string;
}
