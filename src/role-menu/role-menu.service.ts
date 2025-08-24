import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleMenuDto } from './dto/create-role-menu.dto';
import { RoleMenu } from './entities/role-menu.entity';
import { Role } from 'src/role/entities/role.entity';
import { Menu } from 'src/menu/entities/menu.entity';

@Injectable()
export class RoleMenuService {
  constructor(
    @InjectRepository(RoleMenu) private roleMenuRepository: Repository<RoleMenu>,
    @InjectRepository(Role) private roleRepo: Repository<Role>,
    @InjectRepository(Menu) private menuRepo: Repository<Menu>,
  ) { }

  async getMenusByRoleId(roleId: string) {
    const data = await this.roleMenuRepository.find({
      where: {
        role: { id: roleId },
      },
      relations: ['menu'],
    });

    return data.map((item) => item.menu);
  }

}
