import { ApiProperty } from '@nestjs/swagger';

export class CreateReturPembelianDto {
   
    @ApiProperty({ example: '25-05-2025', description: 'Tanggal Return' })
    tanggalRetur: string;

    @ApiProperty({ example: 'Segel rusak', description: 'Alasam' })
    alasan: string;

    @ApiProperty({ example: 'bf01bd2a-54b2-4cc2-9188-8fbb850f3139', description: 'Jumlah Awal' })
    idPembelian: string;

}
