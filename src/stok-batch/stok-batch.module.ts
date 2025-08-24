import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StokBatchService } from './stok-batch.service';
import { StokBatchController } from './stok-batch.controller';
import { Obat } from 'src/obat/entities/obat.entity';
import { Distributor } from 'src/distributor/entities/distributor.entity';
import { StokBatch } from './entities/stok-batch.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([StokBatch, Distributor, Obat])
        ],
  controllers: [StokBatchController],
  providers: [StokBatchService],
})
export class StokBatchModule {}
