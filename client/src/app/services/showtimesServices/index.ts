import client from '../../../apollo/apollo';
import { GET_SHOWTIMES, GET_SEATS } from './queries';
import { Showtimes_getShowtimesByMovieId } from '../showtimesServices/__generated__/Showtimes';
import { Seats_getSeatsByShowtimeUuid_seats } from '../showtimesServices/__generated__/Seats';

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
      })
      .catch((err) => {
        throw err;
      });

      if (response && response.data) {
        return response.data.getSeatsByShowtimeUuid.seats;
      }
      return [];
  }
}

export default new ShowtimesService();