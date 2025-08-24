import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePembelianDto } from './dto/create-pembelian.dto';
import { UpdatePembelianDto } from './dto/update-pembelian.dto';
import { Pembelian } from './entities/pembelian.entity';
import { Repository } from 'typeorm';
import { Distributor } from 'src/distributor/entities/distributor.entity';

@Injectable()
export class PembelianService {
    constructor(
      @InjectRepository(Pembelian)
      private pembelianRepository: Repository<Pembelian>,
      @InjectRepository(Distributor)
      private distributorRepository: Repository<Distributor>,
    ) { }

 async create(dto: CreatePembelianDto) {

    const distributor = await this.distributorRepository.findOne({ where: { idDistributor: dto.idDistributor } });

    if (!distributor) {
      throw new Error('pembelian tidak ditemukan');
    }

    const pembelian = this.pembelianRepository.create({
      tanggalPembelian: dto.tanggalPembelian,
      total: dto.total,
      distributor: distributor,
    });

    return this.pembelianRepository.save(pembelian);
  }

  findAll() {
    return `This action returns all pembelian`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pembelian`;
  }


  async update(idPembelian: string, data: UpdatePembelianDto) {
      const pembelian = await this.pembelianRepository.findOneBy({ idPembelian });
  
      if (!pembelian) {
        throw new NotFoundException('Data Obat tidak ditemukan');
      }
  
      await this.pembelianRepository.update(idPembelian, data);
      const updated = this.pembelianRepository.merge(pembelian, data);
       
      return this.pembelianRepository.save(updated);
  }

  remove(id: number) {
    return `This action removes a #${id} pembelian`;
  }
}
