import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateDistributorDto } from './create-distributor.dto';

export class UpdateDistributorDto extends PartialType(CreateDistributorDto) {
    @ApiProperty({ example: 'PT Sumber Sehat', description: 'Nama Distributor' })
    nama: string;
    
    @ApiProperty({ example: 'Jl. Merdeka 123', description: 'Alamat' })
    alamat: string;
    
    @ApiProperty({ example: '021-888123', description: 'Kontak' })
    kontak: string;
}
