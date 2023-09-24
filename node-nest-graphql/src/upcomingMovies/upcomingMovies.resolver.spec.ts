import { Test, TestingModule } from '@nestjs/testing';
import { MoviesResolver } from './upcomingMovies.resolver';

describe('MoviesResolver', () => {
  let resolver: MoviesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesResolver],
    }).compile();

    resolver = module.get<MoviesResolver>(MoviesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
