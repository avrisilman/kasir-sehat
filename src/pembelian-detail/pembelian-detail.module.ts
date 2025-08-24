import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PembelianDetailService } from './pembelian-detail.service';
import { PembelianDetailController } from './pembelian-detail.controller';
import { Obat } from 'src/obat/entities/obat.entity';
import { Pembelian } from 'src/pembelian/entities/pembelian.entity';
import { PembelianDetail } from './entities/pembelian-detail.entity';

@Module({
  imports: [
        TypeOrmModule.forFeature([PembelianDetail, Pembelian, Obat])
      ],
  controllers: [PembelianDetailController],
  providers: [PembelianDetailService],
})
export class PembelianDetailModule {}
