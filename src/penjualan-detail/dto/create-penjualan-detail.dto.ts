import { ApiProperty } from '@nestjs/swagger';

export class CreatePenjualanDetailDto {

    @ApiProperty({ example: '5', description: 'Jumlah' })
    jumlah: string;

    @ApiProperty({ example: '3000', description: 'Harga Jual' })
    hargaJual: string;

    @ApiProperty({ example: '5b4e3cc4-9a1e-46ee-8c4a-36f7ccc1036b', description: 'ID Obat' })
    idObat: string;

    @ApiProperty({ example: 'xxxxxx', description: 'ID Stok Batch' })
    idBatch: string;

    @ApiProperty({ example: 'adf6917c-f76e-44b1-bea9-138c02228fde', description: 'ID Penjualan' })
    idPenjualan: string;
    
}
