import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PembelianService } from './pembelian.service';
import { CreatePembelianDto } from './dto/create-pembelian.dto';
import { UpdatePembelianDto } from './dto/update-pembelian.dto';

@Controller('pembelian')
export class PembelianController {
  constructor(private readonly pembelianService: PembelianService) { }

  @Post()
  create(@Body() createPembelianDto: CreatePembelianDto) {
    return this.pembelianService.create(createPembelianDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdatePembelianDto) {
    return this.pembelianService.update(id, body);
  }

  @Get()
  findAll() {
    return this.pembelianService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pembelianService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pembelianService.remove(+id);
  }
}
