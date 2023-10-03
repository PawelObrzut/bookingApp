/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetSeats
// ====================================================

export interface SetSeats_saveSeats_seats {
  __typename: "Seat";
  row: number;
  seat: number;
  available: boolean;
}

export interface SetSeats_saveSeats {
  __typename: "Showtime";
  seats: SetSeats_saveSeats_seats[];
}

export interface SetSeats {
  saveSeats: SetSeats_saveSeats;
}

export interface SetSeatsVariables {
  seatsData: string[];
  showtimeUuid: string;
}
