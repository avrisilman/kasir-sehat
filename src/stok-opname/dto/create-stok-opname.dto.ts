import { ApiProperty } from '@nestjs/swagger';

export class CreateStokOpnameDto {

    @ApiProperty({ example: '25-05-2025', description: 'Tanggal' })
    tanggal: string;

    @ApiProperty({ example: 'xxxxxx', description: 'Username' })
    idUser: string;
}
