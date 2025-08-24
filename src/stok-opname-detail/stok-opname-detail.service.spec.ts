import { Test, TestingModule } from '@nestjs/testing';
import { StokOpnameDetailService } from './stok-opname-detail.service';

describe('StokOpnameDetailService', () => {
  let service: StokOpnameDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StokOpnameDetailService],
    }).compile();

    service = module.get<StokOpnameDetailService>(StokOpnameDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
