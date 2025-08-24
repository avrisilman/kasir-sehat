import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReturPembelianDetailDto } from './create-retur-pembelian-detail.dto';

export class UpdateReturPembelianDetailDto extends PartialType(CreateReturPembelianDetailDto) {
    @ApiProperty({ example: '1', description: 'Jumlah Retur' })
    jumlahRetur: string;
}
