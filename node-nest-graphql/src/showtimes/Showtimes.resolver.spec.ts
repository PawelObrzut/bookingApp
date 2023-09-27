import { Test, TestingModule } from '@nestjs/testing';
import { ShowtimesResolver } from './Showtimes.resolver';

describe('ShowtimesResolver', () => {
  let resolver: ShowtimesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowtimesResolver],
    }).compile();

    resolver = module.get<ShowtimesResolver>(ShowtimesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
