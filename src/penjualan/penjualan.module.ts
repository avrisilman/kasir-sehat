import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenjualanService } from './penjualan.service';
import { PenjualanController } from './penjualan.controller';
import { Penjualan } from './entities/penjualan.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([Penjualan])
        ],
  controllers: [PenjualanController],
  providers: [PenjualanService],
})
export class PenjualanModule {}
