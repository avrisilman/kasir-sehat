import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { Role } from 'src/role/entities/role.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) { }

  async create(dto: CreateUserDto) {

    const role = await this.roleRepository.findOne({ where: { id: dto.roleId } });

    if (!role) {
      throw new Error('role tidak ditemukan');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds);
    
    const pembelian = this.userRepository.create({
      username: dto.username,
      password: hashedPassword,
      fullName: dto.fullName,
      nameStore: dto.nameStore,
      address: dto.address,
      isActive: dto.isActive,
      createdAt: new Date(),
      role: role,
    });

    return this.userRepository.save(pembelian);
  }

  findAll() {
    return this.userRepository.find({ relations: ['role'] });
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: { id: id.toString() },
      relations: ['role'],
    });
  }

  async findByUsername(username: string): Promise<Users | null> {
    return this.userRepository.findOne({ where: { username } });
  }


  async update(id: string, data: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('Data User tidak ditemukan');
    }

    await this.userRepository.update(id, data);
    const updated = this.userRepository.merge(user, data);

    return this.userRepository.save(updated);
  }

  remove(id: number) {
    return `This action removes a #${id} pembelian`;
  }
}
