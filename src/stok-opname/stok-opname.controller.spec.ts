import { Test, TestingModule } from '@nestjs/testing';
import { StokOpnameController } from './stok-opname.controller';
import { StokOpnameService } from './stok-opname.service';

describe('StokOpnameController', () => {
  let controller: StokOpnameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StokOpnameController],
      providers: [StokOpnameService],
    }).compile();

    controller = module.get<StokOpnameController>(StokOpnameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
