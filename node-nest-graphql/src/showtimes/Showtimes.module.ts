import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Showtime } from './Showtime.entity';
import { ShowtimesService } from './Showtimes.service';
import { ShowtimesResolver } from './Showtimes.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Showtime])],
  providers: [ShowtimesResolver, ShowtimesService],
})
export class ShowtimesModule {}
