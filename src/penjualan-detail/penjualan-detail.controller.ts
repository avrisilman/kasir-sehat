import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PenjualanDetailService } from './penjualan-detail.service';
import { CreatePenjualanDetailDto } from './dto/create-penjualan-detail.dto';
import { UpdatePenjualanDetailDto } from './dto/update-penjualan-detail.dto';

@Controller('penjualan-detail')
export class PenjualanDetailController {
  constructor(private readonly penjualanDetailService: PenjualanDetailService) {}

  @Post()
   create(@Body() createPembelianDetailDto: CreatePenjualanDetailDto) {
     return this.penjualanDetailService.create(createPembelianDetailDto);
   }
 
   @Put(':id')
   async update(@Param('id') id: string, @Body() body: UpdatePenjualanDetailDto) {
     return this.penjualanDetailService.update(id, body);
   }
 
   @Get()
   findAll() {
     return this.penjualanDetailService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id', ParseIntPipe) id: number) {
     return this.penjualanDetailService.findOne(id);
   }
 
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.penjualanDetailService.remove(+id);
   }
}
