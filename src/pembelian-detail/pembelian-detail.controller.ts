import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { PembelianDetailService } from './pembelian-detail.service';
import { CreatePembelianDetailDto } from './dto/create-pembelian-detail.dto';
import { UpdatePembelianDetailDto } from './dto/update-pembelian-detail.dto';

@Controller('pembelian-detail')
export class PembelianDetailController {
  constructor(private readonly pembelianDetailService: PembelianDetailService) { }

  @Post()
  create(@Body() createPembelianDetailDto: CreatePembelianDetailDto) {
    return this.pembelianDetailService.create(createPembelianDetailDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdatePembelianDetailDto) {
    return this.pembelianDetailService.update(id, body);
  }

  @Get()
  findAll() {
    return this.pembelianDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pembelianDetailService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pembelianDetailService.remove(+id);
  }
}
