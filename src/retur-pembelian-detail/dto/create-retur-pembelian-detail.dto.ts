import { ApiProperty } from '@nestjs/swagger';

export class CreateReturPembelianDetailDto {
    @ApiProperty({ example: '6b6de9e1-a759-4616-991a-9de7821a4aac', description: 'ID Retur' })
    idRetur: string;

    @ApiProperty({ example: 'eff7ceef-4842-4349-ae49-226fbfe146ad', description: 'ID Batch' })
    idBatch: string;

    @ApiProperty({ example: '1', description: 'Jumlah Retur' })
    jumlahRetur: string;
}
