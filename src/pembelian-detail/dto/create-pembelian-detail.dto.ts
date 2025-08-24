import { ApiProperty } from '@nestjs/swagger';

export class CreatePembelianDetailDto {
   
    @ApiProperty({ example: '20', description: 'Jumlah' })
    jumlah: number;

    @ApiProperty({ example: '10000', description: 'Harga Beli' })
    hargaBeli: string;

    @ApiProperty({ example: '2026-01-01', description: 'Tanggal Expired' })
    tanggalExpired: string;

    @ApiProperty({ example: 'bf01bd2a-54b2-4cc2-9188-8fbb850f3139', description: 'ID Pembelian' })
    idPembelian: string;

    @ApiProperty({ example: '5b4e3cc4-9a1e-46ee-8c4a-36f7ccc1036b', description: 'ID Obat' })
    idObat: string;

}
