import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePembelianDetailDto } from './create-pembelian-detail.dto';

export class UpdatePembelianDetailDto extends PartialType(CreatePembelianDetailDto) {
    @ApiProperty({ example: '20', description: 'Jumlah' })
    jumlah: number;

    @ApiProperty({ example: '10000', description: 'Harga Beli' })
    hargaBeli: string;

    @ApiProperty({ example: '2026-01-01', description: 'Tanggal Expired' })
    tanggalExpired: string;

}
