import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Distributor } from './entities/distributor.entity';

@Injectable()
export class DistributorService {
  
  constructor(
    @InjectRepository(Distributor)
    private distributorRepo: Repository<Distributor>,
  ) {}

  create(data: CreateDistributorDto) {
    const distributor = this.distributorRepo.create(data);
    return this.distributorRepo.save(distributor);
  }

  findAll() {
    return this.distributorRepo.find();
  }

  findOne(id: string) {
    return this.distributorRepo.findOne({ where: { idDistributor: id } });
  }

async update(idDistributor: string, data: UpdateDistributorDto) {
    const distributor = await this.distributorRepo.findOneBy({ idDistributor });

    if (!distributor) {
      throw new NotFoundException('Data distributor tidak ditemukan');
    }

    await this.distributorRepo.update(idDistributor, data);
    return distributor;
  }

  remove(id: string) {
    return this.distributorRepo.delete(id);
  }
  
}
