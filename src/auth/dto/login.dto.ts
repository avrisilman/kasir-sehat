import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'admin', description: 'Username' })
    username: string;

    @ApiProperty({ example: '123456', description: 'Password' })
    password: string;
}
