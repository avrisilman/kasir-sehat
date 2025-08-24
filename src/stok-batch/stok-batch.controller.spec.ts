import { Test, TestingModule } from '@nestjs/testing';
import { StokBatchController } from './stok-batch.controller';
import { StokBatchService } from './stok-batch.service';

describe('StokBatchController', () => {
  let controller: StokBatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StokBatchController],
      providers: [StokBatchService],
    }).compile();

    controller = module.get<StokBatchController>(StokBatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
