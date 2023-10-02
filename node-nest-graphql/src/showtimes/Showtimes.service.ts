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

  async saveSeats(
    seatsData: string[],
    showtimeUuid: string,
  ): Promise<Showtime> {
    try {
      const showtime = await this.getSeatsByShowtimeUuid(showtimeUuid);

      for (const seat of seatsData) {
        const [row, seatNumber] = seat.split(' ').map(Number);
        const isAvailable = showtime.seats.find(
          (seat) => seat.row === row && seat.seat === seatNumber,
        ).available;

        if (!isAvailable) {
          throw new Error('Selected seats are no loger available');
        }
      }

      seatsData.forEach((seat) => {
        const [row, seatNumber] = seat.split(' ').map(Number);
        const seatIndex = showtime.seats.findIndex(
          (seat) => seat.row === row && seat.seat === seatNumber,
        );
        showtime.seats[seatIndex] = {
          ...showtime.seats[seatIndex],
          available: false,
        };
      });

      await this.showtimeRepository.findOneAndUpdate(
        { uuid: showtimeUuid },
        { $set: { seats: showtime.seats } },
      );

      // TODO: issue a ticket.

      return showtime as Showtime;
    } catch (err) {
      throw err;
    }
  }
}
