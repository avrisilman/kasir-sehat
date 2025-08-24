import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) { }

  create(dto: CreateMenuDto) {
    return this.menuRepository.save(dto);
  }

  async update(id: string, data: UpdateMenuDto) {
    const menu = await this.menuRepository.findOneBy({ id });

    if (!menu) {
      throw new NotFoundException('Data Menu tidak ditemukan');
    }

    await this.menuRepository.update(id, data);

    return menu;
  }

  findAll() {
    return this.menuRepository.find({ relations: ['roleMenus'] });
  }

  findOne(id: string) {
    return this.menuRepository.findOne({ where: { id: id }, relations: ['roleMenus'] });
  }

  async remove(id: string) {
    await this.menuRepository.delete(id);
  }

}
