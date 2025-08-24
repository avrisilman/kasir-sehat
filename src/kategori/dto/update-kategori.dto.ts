import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { CreateKategoriDto } from './create-kategori.dto';

export class UpdateKategoriDto extends PartialType(CreateKategoriDto) {
    @ApiProperty({ example: 'Antibiotik', description: 'Nama Kategori' })
    namaKategori: string;
}
