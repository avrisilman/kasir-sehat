import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ReturPembelianService } from './retur-pembelian.service';
import { CreateReturPembelianDto } from './dto/create-retur-pembelian.dto';
import { UpdateReturPembelianDto } from './dto/update-retur-pembelian.dto';

@Controller('retur-pembelian')
export class ReturPembelianController {
  constructor(private readonly returPembelianService: ReturPembelianService) { }

  @Post()
  create(@Body() dto: CreateReturPembelianDto) {
    return this.returPembelianService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateReturPembelianDto) {
    return this.returPembelianService.update(id, body);
  }

  @Get()
  findAll() {
    return this.returPembelianService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.returPembelianService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.returPembelianService.remove(+id);
  }

}
