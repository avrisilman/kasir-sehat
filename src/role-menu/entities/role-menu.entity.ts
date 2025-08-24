import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { Menu } from '../../menu/entities/menu.entity';

@Entity()
export class RoleMenu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Role, (role) => role.roleMenus, { eager: true })
  role: Role;

  @ManyToOne(() => Menu, (menu) => menu.roleMenus, { eager: true })
  menu: Menu;
}
