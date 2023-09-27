import { Resolver, Query, Args } from '@nestjs/graphql';
import { ShowtimesService } from './Showtimes.service';
import { Showtime } from './Showtime.entity';

@Resolver('Showtime')
export class ShowtimesResolver {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Query(() => [Showtime])
  async getShowtimesByMovieId(
    @Args('movieId') movieId: number,
  ): Promise<Showtime[]> {
    try {
      return await this.showtimesService.getShowtimesByMovieId(movieId);
    } catch (err) {
      throw new Error('Unable to fetch showtimes');
    }
  }
}
