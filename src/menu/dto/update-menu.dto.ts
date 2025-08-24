import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) { 
    @ApiProperty({ example: 'Distributor', description: 'Nama Menu' })
    name: string;
    
    @ApiProperty({ example: '', description: 'path' })
    path: string;
}
