import { ApiProperty } from '@nestjs/swagger';

export class CreateKategoriDto {
    @ApiProperty({ example: 'Antibiotik', description: 'Nama Kategori' })
    namaKategori: string;
}
