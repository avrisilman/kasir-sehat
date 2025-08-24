import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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

    @ApiProperty({ example: '1', description: 'Distributor' })
    roleId: string;

}
