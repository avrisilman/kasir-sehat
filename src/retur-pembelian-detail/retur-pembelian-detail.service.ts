import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReturPembelianDetailDto } from './dto/create-retur-pembelian-detail.dto';
import { UpdateReturPembelianDetailDto } from './dto/update-retur-pembelian-detail.dto';
import { ReturPembelian } from 'src/retur-pembelian/entities/retur-pembelian.entity';
import { ReturPembelianDetail } from './entities/retur-pembelian-detail.entity';
import { StokBatch } from 'src/stok-batch/entities/stok-batch.entity';

@Injectable()
export class ReturPembelianDetailService {
  constructor(
    @InjectRepository(StokBatch)
    private stokBatchRepository: Repository<StokBatch>,
    @InjectRepository(ReturPembelianDetail)
    private returPembelianDetailRepository: Repository<ReturPembelianDetail>,
    @InjectRepository(ReturPembelian)
    private returPembelianRepository: Repository<ReturPembelian>,
  ) { }

  async create(dto: CreateReturPembelianDetailDto) {
    const stokBatch = await this.stokBatchRepository.findOne({ where: { idBatch: dto.idBatch } });
    const returPembelian = await this.returPembelianRepository.findOne({ where: { idRetur: dto.idRetur } });

    if (!stokBatch) {
      throw new Error('ID Stok Batch tidak ditemukan');
    }

    if (!returPembelian) {
      throw new Error('ID Retur Pembelian tidak ditemukan');
    }

    const returPembelianDetail = this.returPembelianDetailRepository.create({
      jumlahRetur: dto.jumlahRetur,
      stokBatch: stokBatch,
      returPembelian: returPembelian,
    });

    return this.returPembelianDetailRepository.save(returPembelianDetail);
  }

  findAll() {
    return this.returPembelianDetailRepository.find({ relations: ['stokBatch', 'returPembelian'] });
  }

  findOne(id: string) {
    return this.returPembelianDetailRepository.findOne({
      where: { idDetail: id.toString() },
      relations: ['stokBatch'],
    });
  }

  async update(idDetail: string, data: UpdateReturPembelianDetailDto) {
    const pembelianDetail = await this.returPembelianDetailRepository.findOneBy({ idDetail });

    if (!pembelianDetail) {
      throw new NotFoundException('ID Pembelian Detail tidak ditemukan');
    }

    await this.returPembelianDetailRepository.update(idDetail, data);
    const updated = this.returPembelianDetailRepository.merge(pembelianDetail, data);
    return this.returPembelianDetailRepository.save(updated);
  }

  async remove(id: number) {
    await this.returPembelianDetailRepository.delete(id);
  }

}
