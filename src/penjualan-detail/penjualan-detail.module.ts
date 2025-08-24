import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenjualanDetailService } from './penjualan-detail.service';
import { PenjualanDetailController } from './penjualan-detail.controller';
import { Penjualan } from 'src/penjualan/entities/penjualan.entity';
import { Obat } from 'src/obat/entities/obat.entity';
import { StokBatch } from 'src/stok-batch/entities/stok-batch.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([Penjualan, Obat, StokBatch])
        ],
  controllers: [PenjualanDetailController],
  providers: [PenjualanDetailService],
})
export class PenjualanDetailModule {}
