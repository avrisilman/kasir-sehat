import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { CreateStokBatchDto } from './create-stok-batch.dto';

export class UpdateStokBatchDto extends PartialType(CreateStokBatchDto) {
    @ApiProperty({ example: '100', description: 'Jumlah Awal' })
    jumlahAwal: string;

    @ApiProperty({ example: '0', description: 'Jumlah Terpakai' })
    jumlahTerpakai: string;

    @ApiProperty({ example: '2026-01-01', description: 'Tanggal Expired' })
    tanggalExpired: string;

    @ApiProperty({ example: '2500', description: 'Harga Beli' })
    hargaBeli: string;

    @ApiProperty({ example: '25-05-2025', description: 'Tanggal Masuk' })
    tanggalMasuk: string;
}
