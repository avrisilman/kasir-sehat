import { PartialType } from '@nestjs/swagger';
import { CreateObatDto } from './create-obat.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateObatDto extends PartialType(CreateObatDto) {
    @ApiProperty({ example: 'Paracetamol', description: 'Nama Obat' })
    namaObat: string;

    @ApiProperty({ example: 'Pack', description: 'Satuan' })
    satuan: string;

    @ApiProperty({ example: '25000', description: 'Harga Jual' })
    hargaJual: number;

    @ApiProperty({ example: '1BB121212JJH1AA111', description: 'Barcode' })
    barcode: string;

}
