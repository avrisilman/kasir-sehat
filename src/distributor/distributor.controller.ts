import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DistributorService } from './distributor.service';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Dsitributor')
@Controller('distributor')
export class DistributorController {
  constructor(private readonly distributorService: DistributorService) {}

  @Post()
  @ApiOperation({ summary: 'Tambah Distributor baru' })
  @ApiResponse({ status: 201, description: 'Distributor berhasil ditambahkan' })
  create(@Body() dto: CreateDistributorDto) {
    return this.distributorService.create(dto);
  }

  @Get()
  findAll() {
    return this.distributorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDistributorDto) {
    return this.distributorService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distributorService.remove(id);
  } 

}
