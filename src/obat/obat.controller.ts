import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ObatService } from './obat.service';
import { CreateObatDto } from './dto/create-obat.dto';
import { UpdateObatDto } from './dto/update-obat.dto';
//import { ApiBearerAuth } from '@nestjs/swagger';

//@ApiBearerAuth('access-token') 
@Controller('obat')
export class ObatController {
  constructor(private readonly service: ObatService) { }

  @Post()
  create(@Body() dto: CreateObatDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateObatDto) {
    return this.service.update(id, body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
