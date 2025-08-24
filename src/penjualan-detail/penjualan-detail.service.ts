import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePenjualanDetailDto } from './dto/create-penjualan-detail.dto';
import { UpdatePenjualanDetailDto } from './dto/update-penjualan-detail.dto';
import { Obat } from 'src/obat/entities/obat.entity';
import { Penjualan } from 'src/penjualan/entities/penjualan.entity';
import { StokBatch } from 'src/stok-batch/entities/stok-batch.entity';
import { PenjualanDetail } from './entities/penjualan-detail.entity';

@Injectable()
export class PenjualanDetailService {
   constructor(
      @InjectRepository(Obat)
      private obatRepository: Repository<Obat>,
      @InjectRepository(Penjualan)
      private penjualanRepository: Repository<Penjualan>,
      @InjectRepository(Penjualan)
      private penjualanDetailRepository: Repository<PenjualanDetail>,
      @InjectRepository(StokBatch)
      private stokBatchRepository: Repository<StokBatch>,
    ) { }

  async create(dto: CreatePenjualanDetailDto) {
      const obat = await this.obatRepository.findOne({ where: { idObat: dto.idObat } });
      const penjualan = await this.penjualanRepository.findOne({ where: { idPenjualan: dto.idPenjualan } });
      const stokBatch = await this.stokBatchRepository.findOne({ where: { idBatch: dto.idBatch } });
  
      if (!obat) {
        throw new Error('ID Obat tidak ditemukan');
      }

      if (!penjualan) {
        throw new Error('ID Penjualan tidak ditemukan');
      }
  
      if (!stokBatch) {
        throw new Error('ID Stok Batch tidak ditemukan');
      }
  
      const penjualanDetail = this.penjualanDetailRepository.create({
        jumlah: dto.jumlah,
        hargaJual: dto.hargaJual,
        obat: obat,
        penjualan: penjualan,
        stokBatch: stokBatch,
      });
  
      return this.penjualanDetailRepository.save(penjualanDetail);
    }
  
    findAll() {
      return this.penjualanDetailRepository.find({ relations: ['penjualan'] });
    }
    findOne(id: number) {
      return this.penjualanDetailRepository.findOne({
        where: { idDetail: id.toString() },
        relations: ['penjualan'],
      });
    }
  
    async update(idDetail: string, data: UpdatePenjualanDetailDto) {
      const penjualanDetail = await this.penjualanDetailRepository.findOneBy({ idDetail });
  
      if (!penjualanDetail) {
        throw new NotFoundException('ID Penjualan Detail tidak ditemukan');
      }
  
      await this.penjualanDetailRepository.update(idDetail, data);
      const updated = this.penjualanDetailRepository.merge(penjualanDetail, data);
      return this.penjualanDetailRepository.save(updated);
    }
  
    async remove(id: number) {
      await this.obatRepository.delete(id);
    }
}
