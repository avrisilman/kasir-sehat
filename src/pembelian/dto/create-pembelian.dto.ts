import { ApiProperty } from '@nestjs/swagger';

export class CreatePembelianDto {
    @ApiProperty({ example: '31-01-2025', description: 'Nama Kategori' })
    tanggalPembelian: string;

    @ApiProperty({ example: 'c30b2bd7-e981-4be6-8d55-65f409af1013', description: 'Id Distributor' })
    idDistributor: string;

    @ApiProperty({ example: '10000', description: 'Total' })
    total: number;
}
