import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StokOpnameService } from './stok-opname.service';
import { StokOpnameController } from './stok-opname.controller';
import { StokOpname } from './entities/stok-opname.entity';

@Module({
   imports: [
            TypeOrmModule.forFeature([StokOpname])
          ],
  controllers: [StokOpnameController],
  providers: [StokOpnameService],
})
export class StokOpnameModule {}
