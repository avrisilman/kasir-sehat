import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStokBatchDto } from './dto/create-stok-batch.dto';
import { UpdateStokBatchDto } from './dto/update-stok-batch.dto';
import { Distributor } from 'src/distributor/entities/distributor.entity';
import { Obat } from 'src/obat/entities/obat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StokBatch } from './entities/stok-batch.entity';

@Injectable()
export class StokBatchService {
  constructor(
    @InjectRepository(Obat)
    private obatRepository: Repository<Obat>,
    @InjectRepository(Distributor)
    private distributorRepository: Repository<Distributor>,
    @InjectRepository(StokBatch)
    private stokBatchRepository: Repository<StokBatch>,
  ) { }

  async create(dto: CreateStokBatchDto) {
    const obat = await this.obatRepository.findOne({ where: { idObat: dto.idObat } });
    const distributor = await this.distributorRepository.findOne({ where: { idDistributor: dto.idDistributor } });

    if (!obat) {
      throw new Error('ID Obat tidak ditemukan');
    }

    if (!distributor) {
      throw new Error('ID Distributor tidak ditemukan');
    }

    const stokBatch = this.stokBatchRepository.create({
      jumlahAwal: dto.jumlahAwal,
      jumlahTerpakai: dto.jumlahTerpakai,
      tanggalExpired: dto.tanggalExpired,
      hargaBeli: dto.hargaBeli,
      tanggalMasuk: dto.tanggalMasuk,
      obats: obat,
      distributor: distributor
    });

    return this.stokBatchRepository.save(stokBatch);
  }

  findAll() {
    return this.stokBatchRepository.find({ relations: ['obats', 'distributor'] });
  }

  findOne(id: string) {
    return this.stokBatchRepository.findOne({
      where: { idBatch: id.toString() },
      relations: ['obats'],
    });
  }

  async update(idBatch: string, data: UpdateStokBatchDto) {
    const stokBatch = await this.stokBatchRepository.findOneBy({ idBatch });

    if (!stokBatch) {
      throw new NotFoundException('ID Stok Batch tidak ditemukan');
    }

    await this.stokBatchRepository.update(idBatch, data);
    const updated = this.stokBatchRepository.merge(stokBatch, data);
    return this.stokBatchRepository.save(updated);
  }

  async remove(id: number) {
    await this.stokBatchRepository.delete(id);
  }
}
