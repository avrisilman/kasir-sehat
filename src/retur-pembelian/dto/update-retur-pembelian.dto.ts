import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReturPembelianDto } from './create-retur-pembelian.dto';

export class UpdateReturPembelianDto extends PartialType(CreateReturPembelianDto) {
    @ApiProperty({ example: '25-05-2025', description: 'Tanggal Return' })
    tanggalRetur: string;

    @ApiProperty({ example: 'Segel rusak', description: 'Alasam' })
    alasan: string;
}
