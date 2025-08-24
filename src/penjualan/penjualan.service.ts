import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';
import { Penjualan } from './entities/penjualan.entity';

@Injectable()
export class PenjualanService {
  constructor(
    @InjectRepository(Penjualan)
    private penjualanRepository: Repository<Penjualan>,
  ) { }

  create(dto: CreatePenjualanDto) {
    return this.penjualanRepository.save(dto);
  }

  findAll() {
    return this.penjualanRepository.find({ relations: ['penjualanDetails'] });
  }

  findOne(id: string) {
    return this.penjualanRepository.findOne({
      where: { idPenjualan: id.toString() },
      relations: ['penjualanDetails'],
    });
  }

  async update(idPenjualan: string, data: UpdatePenjualanDto) {
    const penjualan = await this.penjualanRepository.findOneBy({ idPenjualan });

    if (!penjualan) {
      throw new NotFoundException('Data Penjualan tidak ditemukan');
    }

    await this.penjualanRepository.update(idPenjualan, data);
    const updated = this.penjualanRepository.merge(penjualan, data);
    return this.penjualanRepository.save(updated);
  }

  remove(id: number) {
    return `This action removes a #${id} penjualan`;
  }
}
