import { Test, TestingModule } from '@nestjs/testing';
import { ReturPembelianDetailController } from './retur-pembelian-detail.controller';
import { ReturPembelianDetailService } from './retur-pembelian-detail.service';

describe('ReturPembelianDetailController', () => {
  let controller: ReturPembelianDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturPembelianDetailController],
      providers: [ReturPembelianDetailService],
    }).compile();

    controller = module.get<ReturPembelianDetailController>(ReturPembelianDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
