import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({ example: 'Distributor', description: 'Nama Menu' })
    name: string;
}
