import { Test, TestingModule } from '@nestjs/testing';
import { StokBatchService } from './stok-batch.service';

describe('StokBatchService', () => {
  let service: StokBatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StokBatchService],
    }).compile();

    service = module.get<StokBatchService>(StokBatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
