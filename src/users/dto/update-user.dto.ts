import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ example: 'admin', description: 'Username' })
    username: string;

    @ApiProperty({ example: '123456', description: 'Password' })
    password: string;

    @ApiProperty({ example: 'Afris', description: 'Fullname' })
    fullName: string;

    @ApiProperty({ example: 'Apotek Zefa Farma', description: 'Fullname' })
    nameStore: string;

    @ApiProperty({ example: 'J. Raya Malahayu Jawa Tengah', description: 'Fullname' })
    address: string;

    @ApiProperty({ example: 'true', description: 'Status' })
    isActive: boolean;
}
