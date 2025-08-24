import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturPembelianService } from './retur-pembelian.service';
import { ReturPembelianController } from './retur-pembelian.controller';
import { ReturPembelian } from './entities/retur-pembelian.entity';
import { Pembelian } from 'src/pembelian/entities/pembelian.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReturPembelian, Pembelian])
  ],
  controllers: [ReturPembelianController],
  providers: [ReturPembelianService],
})
export class ReturPembelianModule { }
