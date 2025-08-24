import { Module } from '@nestjs/common';
import { PembelianService } from './pembelian.service';
import { PembelianController } from './pembelian.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pembelian } from './entities/pembelian.entity';
import { Distributor } from 'src/distributor/entities/distributor.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([Pembelian, Distributor])
    ],
  controllers: [PembelianController],
  providers: [PembelianService],
})
export class PembelianModule {}
