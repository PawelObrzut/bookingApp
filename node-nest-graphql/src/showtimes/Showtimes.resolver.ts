import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ShowtimesService } from './Showtimes.service';
import { Showtime } from './Showtime.entity';

@Resolver('Showtime')
export class ShowtimesResolver {
  constructor(private showtimesService: ShowtimesService) {}

  @Query(() => [Showtime])
  async getShowtimesByMovieId(
    @Args('movieId', { type: () => Int }) movieId: number,
  ): Promise<Showtime[]> {
    try {
      return await this.showtimesService.getShowtimesByMovieId(movieId);
    } catch (err) {
      throw new Error('Unable to fetch showtimes');
    }
  }

  @Query(() => Showtime)
  async getSeatsByShowtimeId(
    @Args('showtimeId', { type: () => String }) showtimeId: string,
  ): Promise<Showtime> {
    try {
      return await this.showtimesService.getSeatsByShowtimeId(showtimeId);
    } catch (err) {
      throw new Error('Unable to fetch seats');
    }
  }
}
