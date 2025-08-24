import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePembelianDetailDto } from './dto/create-pembelian-detail.dto';
import { UpdatePembelianDetailDto } from './dto/update-pembelian-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Obat } from 'src/obat/entities/obat.entity';
import { Pembelian } from 'src/pembelian/entities/pembelian.entity';
import { PembelianDetail } from './entities/pembelian-detail.entity';

@Injectable()
export class PembelianDetailService {
  constructor(
    @InjectRepository(Obat)
    private obatRepository: Repository<Obat>,
    @InjectRepository(Pembelian)
    private pembelianRepository: Repository<Pembelian>,
    @InjectRepository(PembelianDetail)
    private pembelianDetailRepository: Repository<PembelianDetail>,
  ) { }

  async create(dto: CreatePembelianDetailDto) {
    const obat = await this.obatRepository.findOne({ where: { idObat: dto.idObat } });
    const pembelian = await this.pembelianRepository.findOne({ where: { idPembelian: dto.idPembelian } });

    if (!obat) {
      throw new Error('ID Obat tidak ditemukan');
    }

    if (!pembelian) {
      throw new Error('ID Pembelian tidak ditemukan');
    }

    const pembelianDetail = this.pembelianDetailRepository.create({
      jumlah: dto.jumlah,
      hargaBeli: dto.hargaBeli,
      tanggalExpired: dto.tanggalExpired,
      obat: obat,
      pembelian: pembelian
    });

    return this.pembelianDetailRepository.save(pembelianDetail);
  }

  findAll() {
    return this.pembelianDetailRepository.find({ relations: ['pembelian'] });
  }
  findOne(id: number) {
    return this.pembelianDetailRepository.findOne({
      where: { idDetail: id.toString() },
      relations: ['pembelian'],
    });
  }

  async update(idDetail: string, data: UpdatePembelianDetailDto) {
    const pembelianDetail = await this.pembelianDetailRepository.findOneBy({ idDetail });

    if (!pembelianDetail) {
      throw new NotFoundException('ID Pembelian Detail tidak ditemukan');
    }

    await this.pembelianDetailRepository.update(idDetail, data);
    const updated = this.pembelianDetailRepository.merge(pembelianDetail, data);
    return this.pembelianDetailRepository.save(updated);
  }

  async remove(id: number) {
    await this.obatRepository.delete(id);
  }
}
