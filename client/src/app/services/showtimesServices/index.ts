import client from '../../../apollo/apollo';
import { GET_SHOWTIMES, GET_SEATS, SAVE_SEATS } from './queries';
import { Showtimes_getShowtimesByMovieId } from '../showtimesServices/__generated__/Showtimes';
import { Seats_getSeatsByShowtimeUuid_seats } from '../showtimesServices/__generated__/Seats';
import { SetSeats_saveSeats_seats } from '../showtimesServices/__generated__/SetSeats';

import authClient from '../../../apollo/authApollo';

class ShowtimesService {
  public async fetchShowtimes(movieId: number): Promise<Showtimes_getShowtimesByMovieId[]> {
    const response = await client
      .query({ 
        query: GET_SHOWTIMES,
        variables: {
          movieId: movieId
        },
      })
      .catch((err) => {
        throw err;
      });

    if (response && response.data && response.data.getShowtimesByMovieId) {
      return response.data.getShowtimesByMovieId as Showtimes_getShowtimesByMovieId[];
    }

    return [];
  }

  public async fetchSeats(showtimeUuid: string): Promise<Seats_getSeatsByShowtimeUuid_seats[]> {
    const response = await client
      .query({
        query: GET_SEATS,
        variables: {
          showtimeUuid: showtimeUuid
        },
        fetchPolicy: 'network-only'
      })
      .catch((err) => {
        throw err;
      });

      if (response && response.data && response.data.getSeatsByShowtimeUuid) {
        return response.data.getSeatsByShowtimeUuid.seats;
      }
      return [];
  }

  public async setSeats(seatsData: string[], showtimeUuid: string): Promise<SetSeats_saveSeats_seats[]> {
    const response = await authClient
      .mutate({
        mutation: SAVE_SEATS,
        variables: {
          seatsData: seatsData,
          showtimeUuid: showtimeUuid,
        }
      })
      .catch((err) => {
        throw err;
      });
    if (response && response.data) {
      return response.data.saveSeats.seats
    }
    return [];
  }
}

export default new ShowtimesService();