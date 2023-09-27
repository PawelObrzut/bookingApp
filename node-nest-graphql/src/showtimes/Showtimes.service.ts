import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Showtime } from './Showtime.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ShowtimesService {
  constructor(
    @InjectRepository(Showtime)
    private showtimeRepository: MongoRepository<Showtime>,
  ) {}

  async getShowtimesByMovieId(movieId: number): Promise<Showtime[]> {
    const showtimes = await this.showtimeRepository
      .find({
        where: {
          movieId: movieId,
        },
      })
      .catch(() => {
        new InternalServerErrorException();
      });
    return showtimes as Showtime[];
  }
}
