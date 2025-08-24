import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StokOpnameDetailService } from './stok-opname-detail.service';
import { CreateStokOpnameDetailDto } from './dto/create-stok-opname-detail.dto';
import { UpdateStokOpnameDetailDto } from './dto/update-stok-opname-detail.dto';

@Controller('stok-opname-detail')
export class StokOpnameDetailController {
  constructor(private readonly stokOpnameDetailService: StokOpnameDetailService) { }

  @Post()
  create(@Body() createPembelianDetailDto: CreateStokOpnameDetailDto) {
    return this.stokOpnameDetailService.create(createPembelianDetailDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateStokOpnameDetailDto) {
    return this.stokOpnameDetailService.update(id, body);
  }

  @Get()
  findAll() {
    return this.stokOpnameDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stokOpnameDetailService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stokOpnameDetailService.remove(+id);
  }

}
