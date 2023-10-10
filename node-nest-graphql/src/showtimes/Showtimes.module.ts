import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Showtime } from './showtime.entity';
import { ShowtimesService } from './showtimes.service';
import { ShowtimesResolver } from './showtimes.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Showtime])],
  providers: [ShowtimesResolver, ShowtimesService],
})
export class ShowtimesModule {}
