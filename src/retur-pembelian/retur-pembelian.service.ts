import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReturPembelianDto } from './dto/create-retur-pembelian.dto';
import { UpdateReturPembelianDto } from './dto/update-retur-pembelian.dto';
import { ReturPembelian } from './entities/retur-pembelian.entity';
import { Pembelian } from 'src/pembelian/entities/pembelian.entity';

@Injectable()
export class ReturPembelianService {
   constructor(
      @InjectRepository(ReturPembelian)
      private returPembelianRepository: Repository<ReturPembelian>,
      @InjectRepository(Pembelian)
      private pembelianRepository: Repository<Pembelian>,
    ) { }

  async create(dto: CreateReturPembelianDto) {
      const pembelian = await this.pembelianRepository.findOne({ where: { idPembelian: dto.idPembelian } });
  
      if (!pembelian) {
        throw new Error('ID Pembelian tidak ditemukan');
      }
  
      const returnPembelian = this.returPembelianRepository.create({
        tanggalRetur: dto.tanggalRetur,
        alasan: dto.alasan,
        pembelian: pembelian
      });
  
      return this.returPembelianRepository.save(returnPembelian);
    }
  
    findAll() {
      return this.returPembelianRepository.find({ relations: ['pembelian'] });
    }
  
    findOne(id: string) {
      return this.returPembelianRepository.findOne({
        where: { idRetur: id.toString() },
        relations: ['pembelian'],
      });
    }
  
    async update(idRetur: string, data: UpdateReturPembelianDto) {
      const returnPembelian = await this.returPembelianRepository.findOneBy({ idRetur });
  
      if (!returnPembelian) {
        throw new NotFoundException('ID Return tidak ditemukan');
      }
  
      await this.returPembelianRepository.update(idRetur, data);
      const updated = this.returPembelianRepository.merge(returnPembelian, data);
      return this.returPembelianRepository.save(updated);
    }
  
    async remove(id: number) {
      await this.returPembelianRepository.delete(id);
    }
    
}
