import { Test, TestingModule } from '@nestjs/testing';
import { StokOpnameService } from './stok-opname.service';

describe('StokOpnameService', () => {
  let service: StokOpnameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StokOpnameService],
    }).compile();

    service = module.get<StokOpnameService>(StokOpnameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
