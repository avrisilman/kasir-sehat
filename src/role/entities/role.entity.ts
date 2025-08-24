import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoleMenu } from '../../role-menu/entities/role-menu.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => RoleMenu, (roleMenu) => roleMenu.role)
  roleMenus: RoleMenu[];
}
