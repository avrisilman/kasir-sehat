import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStokOpnameDetailDto } from './dto/create-stok-opname-detail.dto';
import { UpdateStokOpnameDetailDto } from './dto/update-stok-opname-detail.dto';
import { Obat } from 'src/obat/entities/obat.entity';
import { StokOpname } from 'src/stok-opname/entities/stok-opname.entity';
import { StokOpnameDetail } from './entities/stok-opname-detail.entity';

@Injectable()
export class StokOpnameDetailService {
    constructor(
      @InjectRepository(Obat)
      private obatRepository: Repository<Obat>,
      @InjectRepository(StokOpname)
      private stokOpnameRepository: Repository<StokOpname>,
      @InjectRepository(StokOpnameDetail)
      private stokOpnameDetailRepository: Repository<StokOpnameDetail>,
    ) { }

  async create(dto: CreateStokOpnameDetailDto) {
     const obat = await this.obatRepository.findOne({ where: { idObat: dto.idObat } });
     const stokOpname = await this.stokOpnameRepository.findOne({ where: { idOpname: dto.idOpname } });
 
     if (!obat) {
       throw new Error('ID Obat Batch tidak ditemukan');
     }
 
     if (!stokOpname) {
       throw new Error('ID Stok Opname tidak ditemukan');
     }
 
     const stokOpnameDetail = this.stokOpnameDetailRepository.create({
       stokTercatat: dto.stokTercatat,
       stokFisik: dto.stokFisik,
       selisih: dto.selisih,
       keterangan: dto.keterangan,
       obat: obat,
       stokOpname: stokOpname,
     });
 
     return this.stokOpnameDetailRepository.save(stokOpnameDetail);
   }
 
   findAll() {
     return this.stokOpnameDetailRepository.find({ relations: ['obat', 'stokOpname'] });
   }
 
   findOne(id: string) {
     return this.stokOpnameDetailRepository.findOne({
       where: { idDetail: id.toString() },
       relations: ['stokBatch'],
     });
   }
 
   async update(idDetail: string, data: UpdateStokOpnameDetailDto) {
     const pembelianDetail = await this.stokOpnameDetailRepository.findOneBy({ idDetail });
 
     if (!pembelianDetail) {
       throw new NotFoundException('ID Pembelian Detail tidak ditemukan');
     }
 
     await this.stokOpnameDetailRepository.update(idDetail, data);
     const updated = this.stokOpnameDetailRepository.merge(pembelianDetail, data);
     return this.stokOpnameDetailRepository.save(updated);
   }
 
   async remove(id: number) {
     await this.stokOpnameDetailRepository.delete(id);
   }
 
}
