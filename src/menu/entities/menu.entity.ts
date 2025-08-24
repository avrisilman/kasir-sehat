import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoleMenu } from '../../role-menu/entities/role-menu.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  path: string;

  @OneToMany(() => RoleMenu, (roleMenu) => roleMenu.menu)
  roleMenus: RoleMenu[];
}
