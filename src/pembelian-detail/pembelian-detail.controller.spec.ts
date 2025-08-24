import { Test, TestingModule } from '@nestjs/testing';
import { PembelianDetailController } from './pembelian-detail.controller';
import { PembelianDetailService } from './pembelian-detail.service';

describe('PembelianDetailController', () => {
  let controller: PembelianDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PembelianDetailController],
      providers: [PembelianDetailService],
    }).compile();

    controller = module.get<PembelianDetailController>(PembelianDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
