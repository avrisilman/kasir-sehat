import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistributorModule } from './distributor/distributor.module';
import { KategoriModule } from './kategori/kategori.module';
import { ObatModule } from './obat/obat.module';
import { PembelianModule } from './pembelian/pembelian.module';
import { PembelianDetailModule } from './pembelian-detail/pembelian-detail.module';
import { PenjualanModule } from './penjualan/penjualan.module';
import { PenjualanDetailModule } from './penjualan-detail/penjualan-detail.module';
import { ReturPembelianModule } from './retur-pembelian/retur-pembelian.module';
import { ReturPembelianDetailModule } from './retur-pembelian-detail/retur-pembelian-detail.module';
import { StokBatchModule } from './stok-batch/stok-batch.module';
import { StokOpnameModule } from './stok-opname/stok-opname.module';
import { StokOpnameDetailModule } from './stok-opname-detail/stok-opname-detail.module';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { MenuModule } from './menu/menu.module';
import { RoleMenuModule } from './role-menu/role-menu.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.8.238',
      port: 5432,
      username: 'pts',
      password: '123456',
      database: 'kasir_sehat',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // false in production!
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    DistributorModule,
    KategoriModule,
    ObatModule,
    PembelianModule,
    PembelianDetailModule,
    PenjualanModule,
    PenjualanDetailModule,
    ReturPembelianModule,
    ReturPembelianDetailModule,
    StokBatchModule,
    StokOpnameModule,
    StokOpnameDetailModule,
    UsersModule,
    RoleModule,
    MenuModule,
    RoleMenuModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule { }
