import { Test, TestingModule } from '@nestjs/testing';
import { PenjualanDetailService } from './penjualan-detail.service';

describe('PenjualanDetailService', () => {
  let service: PenjualanDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenjualanDetailService],
    }).compile();

    service = module.get<PenjualanDetailService>(PenjualanDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
