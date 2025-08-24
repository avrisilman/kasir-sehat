import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { StokBatchService } from './stok-batch.service';
import { CreateStokBatchDto } from './dto/create-stok-batch.dto';
import { UpdateStokBatchDto } from './dto/update-stok-batch.dto';

@Controller('stok-batch')
export class StokBatchController {
  constructor(private readonly stokBatchService: StokBatchService) { }

  @Post()
  create(@Body() dto: CreateStokBatchDto) {
    return this.stokBatchService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateStokBatchDto) {
    return this.stokBatchService.update(id, body);
  }

  @Get()
  findAll() {
    return this.stokBatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stokBatchService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stokBatchService.remove(+id);
  }

}
