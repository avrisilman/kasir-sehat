import { ApiProperty } from '@nestjs/swagger';

export class CreateStokBatchDto {

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

    @ApiProperty({ example: 'c30b2bd7-e981-4be6-8d55-65f409af1013', description: 'ID Distributor' })
    idDistributor: string;

    @ApiProperty({ example: '5b4e3cc4-9a1e-46ee-8c4a-36f7ccc1036b', description: 'ID Obat' })
    idObat: string;

}
