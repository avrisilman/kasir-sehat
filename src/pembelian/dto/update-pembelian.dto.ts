import { PartialType } from '@nestjs/swagger';
import { CreatePembelianDto } from './create-pembelian.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePembelianDto extends PartialType(CreatePembelianDto) {
    @ApiProperty({ example: '31-01-2025', description: 'Nama Kategori' })
    tanggalPembelian: string;

    @ApiProperty({ example: '10000', description: 'Total' })
    total: number;
}
