import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Showtime } from './Showtime.entity';
import { MongoRepository, ObjectIdColumn } from 'typeorm';

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
        select: ['_id', 'movieId', 'theater', 'dateTime', 'duration'],
      })
      .catch(() => {
        new InternalServerErrorException();
      });
    return showtimes as Showtime[];
  }

  async getSeatsByShowtimeId(showtimeId: string): Promise<Showtime> {
    const showtime = await this.showtimeRepository
      .findOneBy({ id: ObjectIdColumn(showtimeId) })
      .catch(() => {
        new InternalServerErrorException();
      });
    return showtime as Showtime;
  }
}
