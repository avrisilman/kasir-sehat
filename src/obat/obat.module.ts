import { Module } from '@nestjs/common';
import { ObatService } from './obat.service';
import { ObatController } from './obat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obat } from './entities/obat.entity';
import { Kategori } from '../kategori/entities/kategori.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Obat, Kategori])
  ],
  controllers: [ObatController],
  providers: [ObatService],
})
export class ObatModule {}
