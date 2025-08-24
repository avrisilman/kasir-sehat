import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturPembelianDetailService } from './retur-pembelian-detail.service';
import { ReturPembelianDetailController } from './retur-pembelian-detail.controller';
import { ReturPembelian } from 'src/retur-pembelian/entities/retur-pembelian.entity';
import { StokBatch } from 'src/stok-batch/entities/stok-batch.entity';
import { ReturPembelianDetail } from './entities/retur-pembelian-detail.entity';

@Module({
   imports: [
          TypeOrmModule.forFeature([ReturPembelian, StokBatch, ReturPembelianDetail])
        ],
  controllers: [ReturPembelianDetailController],
  providers: [ReturPembelianDetailService],
})
export class ReturPembelianDetailModule {}
