import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StokOpnameDetailService } from './stok-opname-detail.service';
import { StokOpnameDetailController } from './stok-opname-detail.controller';
import { StokOpname } from 'src/stok-opname/entities/stok-opname.entity';
import { StokOpnameDetail } from './entities/stok-opname-detail.entity';
import { Obat } from 'src/obat/entities/obat.entity';

@Module({
   imports: [
            TypeOrmModule.forFeature([StokOpname, StokOpnameDetail, Obat])
          ],
  controllers: [StokOpnameDetailController],
  providers: [StokOpnameDetailService],
})
export class StokOpnameDetailModule {}
