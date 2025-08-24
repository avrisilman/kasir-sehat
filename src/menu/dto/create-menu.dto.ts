import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
    @ApiProperty({ example: 'Distributor', description: 'Nama Menu' })
    name: string;

    @ApiProperty({ example: '', description: 'path' })
    path: string;
}
