import { ApiProperty } from '@nestjs/swagger';

export class CreateStokOpnameDetailDto {

    @ApiProperty({ example: '95', description: 'Stok Tercatat' })
    stokTercatat: string;

    @ApiProperty({ example: '95', description: 'Stok Fisik' })
    stokFisik: string;

    @ApiProperty({ example: '0', description: 'Selisih' })
    selisih: string;

    @ApiProperty({ example: 'Sesuai', description: 'Keterangan' })
    keterangan: string;

    @ApiProperty({ example: '1', description: 'ID Opname' })
    idOpname: string;

    @ApiProperty({ example: '5b4e3cc4-9a1e-46ee-8c4a-36f7ccc1036b', description: 'ID Obat' })
    idObat: string;
}
