import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePenjualanDetailDto } from './create-penjualan-detail.dto';

export class UpdatePenjualanDetailDto extends PartialType(CreatePenjualanDetailDto) {
    @ApiProperty({ example: '5', description: 'Jumlah' })
    jumlah: string;

    @ApiProperty({ example: '3000', description: 'Harga Jual' })
    hargaJual: string;
}
