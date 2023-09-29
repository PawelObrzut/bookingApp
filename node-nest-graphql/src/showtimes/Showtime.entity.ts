import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@ObjectType()
export class Seat {
  @Field(() => Int)
  @Column()
  row: number;

  @Field(() => Int)
  @Column()
  seat: number;

  @Field()
  @Column()
  available: boolean;
}

@Entity('showtimes')
@ObjectType()
export class Showtime {
  @ObjectIdColumn()
  @Field(() => ID)
  _id: ObjectId;

  @Field(() => Int)
  @Column()
  movieId: number;

  @Field()
  @Column()
  theater: string;

  @Field()
  @Column()
  dateTime: string;

  @Field()
  @Column()
  duration: string;

  @Field(() => [Seat])
  @Column()
  seats: Seat[];
}
