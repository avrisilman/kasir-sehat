import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStokOpnameDto } from './dto/create-stok-opname.dto';
import { UpdateStokOpnameDto } from './dto/update-stok-opname.dto';
import { StokOpname } from './entities/stok-opname.entity';

@Injectable()
export class StokOpnameService {
  constructor(
    @InjectRepository(StokOpname)
    private stokOpnameRepository: Repository<StokOpname>,
  ) { }

  create(dto: CreateStokOpnameDto) {
    return this.stokOpnameRepository.save(dto);
  }

  findAll() {
    return this.stokOpnameRepository.find({ relations: ['stokOpnameDetails'] });
  }

  findOne(id: string) {
    return this.stokOpnameRepository.findOne({
      where: { idOpname: id.toString() },
      relations: ['stokOpnameDetails'],
    });
  }

  async update(idOpname: string, data: UpdateStokOpnameDto) {
    const stokOpname = await this.stokOpnameRepository.findOneBy({ idOpname });

    if (!stokOpname) {
      throw new NotFoundException('ID Stok Opname tidak ditemukan');
    }

    await this.stokOpnameRepository.update(idOpname, data);
    const updated = this.stokOpnameRepository.merge(stokOpname, data);
    return this.stokOpnameRepository.save(updated);
  }

  remove(id: number) {
    return `This action removes a #${id} penjualan`;
  }

}
