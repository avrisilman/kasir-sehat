import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ReturPembelianDetailService } from './retur-pembelian-detail.service';
import { CreateReturPembelianDetailDto } from './dto/create-retur-pembelian-detail.dto';
import { UpdateReturPembelianDetailDto } from './dto/update-retur-pembelian-detail.dto';

@Controller('retur-pembelian-detail')
export class ReturPembelianDetailController {
  constructor(private readonly returPembelianDetailService: ReturPembelianDetailService) {}

  @Post()
   create(@Body() createPembelianDetailDto: CreateReturPembelianDetailDto) {
     return this.returPembelianDetailService.create(createPembelianDetailDto);
   }
 
   @Put(':id')
   async update(@Param('id') id: string, @Body() body: UpdateReturPembelianDetailDto) {
     return this.returPembelianDetailService.update(id, body);
   }
 
   @Get()
   findAll() {
     return this.returPembelianDetailService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.returPembelianDetailService.findOne(id);
   }
 
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.returPembelianDetailService.remove(+id);
   }

}
