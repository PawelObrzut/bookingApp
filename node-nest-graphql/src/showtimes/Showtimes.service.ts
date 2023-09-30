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
        where: { movieId: movieId },
        select: ['_id', 'uuid', 'movieId', 'theater', 'dateTime', 'duration'],
      })
      .catch(() => {
        new InternalServerErrorException();
      });
    return showtimes as Showtime[];
  }

  async getSeatsByShowtimeUuid(showtimeUuid: string): Promise<Showtime> {
    const showtime = await this.showtimeRepository
      .findOneBy({ uuid: showtimeUuid })
      .catch(() => {
        throw new InternalServerErrorException();
      });
    return showtime as Showtime;
  }
}
