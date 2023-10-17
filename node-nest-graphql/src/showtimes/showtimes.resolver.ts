import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { ShowtimesService } from './showtimes.service';
import { Showtime } from './showtime.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

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

  @Mutation(() => Showtime)
  @UseGuards(AuthGuard)
  async saveSeats(
    @Args('seatsData', { type: () => [String] }) seatsData: string[],
    @Args('showtimeUuid', { type: () => String }) showtimeUuid: string,
  ): Promise<Showtime> {
    return await this.showtimesService
      .saveSeats(seatsData, showtimeUuid)
      .catch((err) => {
        return err;
      });
  }
}
