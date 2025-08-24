import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleMenuService } from './role-menu.service';
import { RoleMenuController } from './role-menu.controller';
import { Role } from 'src/role/entities/role.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { RoleMenu } from './entities/role-menu.entity';

@Module({
  imports: [
            TypeOrmModule.forFeature([Role, Menu, RoleMenu])
          ],
  controllers: [RoleMenuController],
  providers: [RoleMenuService],
})
export class RoleMenuModule {}
