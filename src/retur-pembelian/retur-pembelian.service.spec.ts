import { Test, TestingModule } from '@nestjs/testing';
import { ReturPembelianService } from './retur-pembelian.service';

describe('ReturPembelianService', () => {
  let service: ReturPembelianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturPembelianService],
    }).compile();

    service = module.get<ReturPembelianService>(ReturPembelianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
