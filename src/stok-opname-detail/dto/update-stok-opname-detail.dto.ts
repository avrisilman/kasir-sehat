import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateStokOpnameDetailDto } from './create-stok-opname-detail.dto';

export class UpdateStokOpnameDetailDto extends PartialType(CreateStokOpnameDetailDto) {
    @ApiProperty({ example: '95', description: 'Stok Tercatat' })
    stokTercatat: string;

    @ApiProperty({ example: '95', description: 'Stok Fisik' })
    stokFisik: string;

    @ApiProperty({ example: '0', description: 'Selisih' })
    selisih: string;

    @ApiProperty({ example: 'Sesuai', description: 'Keterangan' })
    keterangan: string;
}
