import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) { }

  create(dto: CreateRoleDto) {
    return this.roleRepository.save(dto);
  }

  async update(id: string, data: UpdateRoleDto) {
    const menu = await this.roleRepository.findOneBy({ id });

    if (!menu) {
      throw new NotFoundException('Data Role tidak ditemukan');
    }

    await this.roleRepository.update(id, data);

    return menu;
  }

  findAll() {
    return this.roleRepository.find({ relations: ['roleMenus'] });
  }

  findOne(id: string) {
    return this.roleRepository.findOne({ where: { id: id }, relations: ['roleMenus'] });
  }

  async remove(id: string) {
    await this.roleRepository.delete(id);
  }

}
