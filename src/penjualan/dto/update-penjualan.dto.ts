import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePenjualanDto } from './create-penjualan.dto';

export class UpdatePenjualanDto extends PartialType(CreatePenjualanDto) {
    @ApiProperty({ example: '25-05-2025', description: 'Tanggal' })
    tanggal: string;

    @ApiProperty({ example: '2', description: 'Total' })
    total: string;

    @ApiProperty({ example: 'Cash/Dana/Gopay', description: 'Metode Bayar' })
    metodeBayar: string;
}
