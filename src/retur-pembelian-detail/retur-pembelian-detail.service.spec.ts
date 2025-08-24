import { Test, TestingModule } from '@nestjs/testing';
import { ReturPembelianDetailService } from './retur-pembelian-detail.service';

describe('ReturPembelianDetailService', () => {
  let service: ReturPembelianDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturPembelianDetailService],
    }).compile();

    service = module.get<ReturPembelianDetailService>(ReturPembelianDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
