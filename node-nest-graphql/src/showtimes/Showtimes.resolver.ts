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
  async getSeatsByShowtimeUuid(
    @Args('showtimeUuid', { type: () => String }) showtimeUuid: string,
  ): Promise<Showtime> {
    try {
      return await this.showtimesService.getSeatsByShowtimeUuid(showtimeUuid);
    } catch (err) {
      throw new Error('Unable to fetch seats');
    }
  }
}
