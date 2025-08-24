import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StokOpnameService } from './stok-opname.service';
import { CreateStokOpnameDto } from './dto/create-stok-opname.dto';
import { UpdateStokOpnameDto } from './dto/update-stok-opname.dto';

@Controller('stok-opname')
export class StokOpnameController {
  constructor(private readonly stokOpnameService: StokOpnameService) { }

  @Post()
  create(@Body() createPenjualanDto: CreateStokOpnameDto) {
    return this.stokOpnameService.create(createPenjualanDto);
  }

  @Get()
  findAll() {
    return this.stokOpnameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stokOpnameService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateStokOpnameDto) {
    return this.stokOpnameService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stokOpnameService.remove(+id);
  }
}
