import { Test, TestingModule } from '@nestjs/testing';
import { StokOpnameDetailController } from './stok-opname-detail.controller';
import { StokOpnameDetailService } from './stok-opname-detail.service';

describe('StokOpnameDetailController', () => {
  let controller: StokOpnameDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StokOpnameDetailController],
      providers: [StokOpnameDetailService],
    }).compile();

    controller = module.get<StokOpnameDetailController>(StokOpnameDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
