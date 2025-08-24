import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleMenuDto {

    @ApiProperty({ example: 'admin', description: 'Role Id' })
    roleId: string;

    @ApiProperty({ example: 'distributor', description: 'Menu Id' })
    menuId: string;
}
