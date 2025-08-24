import { ApiProperty } from '@nestjs/swagger';

export class CreateObatDto {
  @ApiProperty({ example: 'Paracetamol', description: 'Nama Obat' })
  namaObat: string;

  @ApiProperty({ example: 'Pack', description: 'Satuan' })
  satuan: string;

  @ApiProperty({ example: '25000', description: 'Harga Jual' })
  hargaJual: number;

  @ApiProperty({ example: '1BB121212JJH1AA111', description: 'Barcode' })
  barcode: string;

  @ApiProperty({ example: '12d415421213241321342', description: 'Id Kategori' })
  idKategori: string;
}
