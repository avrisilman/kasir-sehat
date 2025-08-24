import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { KategoriService } from './kategori.service';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('kategori')
export class KategoriController {
constructor(private readonly service: KategoriService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Kategori berhasil ditambahkan' })
  create(@Body() dto: CreateKategoriDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateKategoriDto) {
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
