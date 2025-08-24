import { Test, TestingModule } from '@nestjs/testing';
import { ReturPembelianController } from './retur-pembelian.controller';
import { ReturPembelianService } from './retur-pembelian.service';

describe('ReturPembelianController', () => {
  let controller: ReturPembelianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturPembelianController],
      providers: [ReturPembelianService],
    }).compile();

    controller = module.get<ReturPembelianController>(ReturPembelianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
