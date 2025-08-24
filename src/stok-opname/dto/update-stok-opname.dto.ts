import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateStokOpnameDto } from './create-stok-opname.dto';

export class UpdateStokOpnameDto extends PartialType(CreateStokOpnameDto) {
    @ApiProperty({ example: '25-05-2025', description: 'Tanggal' })
    tanggal: string;

    @ApiProperty({ example: 'xxxxxx', description: 'Username' })
    idUser: string;
}
