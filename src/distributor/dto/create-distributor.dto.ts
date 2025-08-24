import { ApiProperty } from '@nestjs/swagger';

export class CreateDistributorDto {
    @ApiProperty({ example: 'PT Sumber Sehat', description: 'Nama Distributor' })
    nama: string;

    @ApiProperty({ example: 'Jl. Merdeka 123', description: 'Alamat' })
    alamat: string;

    @ApiProperty({ example: '021-888123', description: 'Kontak' })
    kontak: string;
}
  