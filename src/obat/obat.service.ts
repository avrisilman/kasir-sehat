import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateObatDto } from './dto/create-obat.dto';
import { UpdateObatDto } from './dto/update-obat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Obat } from './entities/obat.entity';
import { Kategori } from 'src/kategori/entities/kategori.entity';

@Injectable()
export class ObatService {
  constructor(
    @InjectRepository(Obat)
    private obatRepository: Repository<Obat>,
    @InjectRepository(Kategori)
    private kategoriRepository: Repository<Kategori>,
  ) { }

  async create(dto: CreateObatDto) {
    console.log('namaObat type:', typeof dto.namaObat);

    const kategori = await this.kategoriRepository.findOne({ where: { idKategori: dto.idKategori } });

    if (!kategori) {
      throw new Error('Kategori tidak ditemukan');
    }

    const obat = this.obatRepository.create({
      namaObat: dto.namaObat,
      satuan: dto.satuan,
      hargaJual: dto.hargaJual,
      barcode: dto.barcode,
      kategori: kategori,
    });

    return this.obatRepository.save(obat);
  }

  async update(idObat: string, data: UpdateObatDto) {
      const obat = await this.obatRepository.findOneBy({ idObat });
  
      if (!obat) {
        throw new NotFoundException('Data Obat tidak ditemukan');
      }
  
      await this.obatRepository.update(idObat, data);
       
  
      return obat;
  }

  findAll() {
    return this.obatRepository.find({ relations: ['kategori'] });
  }

  findOne(id: string) {
    return this.obatRepository.findOne({ where: { idObat: id }, relations: ['kategori'] });
  }

  async remove(id: string) {
    await this.obatRepository.delete(id);
  }
  
}