import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kategori } from './entities/kategori.entity';
import { UpdateKategoriDto } from './dto/update-kategori.dto';


@Injectable()
export class KategoriService {
  constructor(
    @InjectRepository(Kategori)
    private kategoriRepository: Repository<Kategori>,
  ) { }

  create(dto: CreateKategoriDto) {
    return this.kategoriRepository.save(dto);
  }

  async update(idKategori: string, data: UpdateKategoriDto) {
    const kategori = await this.kategoriRepository.findOneBy({ idKategori });

    if (!kategori) {
      throw new NotFoundException('Data kategori tidak ditemukan');
    }

    await this.kategoriRepository.update(idKategori, data);

    return kategori;
  }

  findAll() {
    return this.kategoriRepository.find({ relations: ['obats'] });
  }

  findOne(id: string) {
    return this.kategoriRepository.findOne({ where: { idKategori: id }, relations: ['obats'] });
  }

  async remove(id: string) {
    await this.kategoriRepository.delete(id);
  }
}
