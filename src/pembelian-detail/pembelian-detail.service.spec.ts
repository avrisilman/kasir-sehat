import { Test, TestingModule } from '@nestjs/testing';
import { PembelianDetailService } from './pembelian-detail.service';

describe('PembelianDetailService', () => {
  let service: PembelianDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PembelianDetailService],
    }).compile();

    service = module.get<PembelianDetailService>(PembelianDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
