import { Test, TestingModule } from '@nestjs/testing';
import { PenjualanDetailController } from './penjualan-detail.controller';
import { PenjualanDetailService } from './penjualan-detail.service';

describe('PenjualanDetailController', () => {
  let controller: PenjualanDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenjualanDetailController],
      providers: [PenjualanDetailService],
    }).compile();

    controller = module.get<PenjualanDetailController>(PenjualanDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
