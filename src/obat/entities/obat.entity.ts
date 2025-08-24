import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Kategori } from 'src/kategori/entities/kategori.entity';
import { PembelianDetail } from 'src/pembelian-detail/entities/pembelian-detail.entity';
import { StokBatch } from 'src/stok-batch/entities/stok-batch.entity';
import { PenjualanDetail } from 'src/penjualan-detail/entities/penjualan-detail.entity';
import { StokOpnameDetail } from 'src/stok-opname-detail/entities/stok-opname-detail.entity';

@Entity()
export class Obat {
    @PrimaryGeneratedColumn('uuid')
    idObat: string;
  
    @Column()
    namaObat: string;

    @Column()
    satuan: string;

    @Column()
    hargaJual: number;

    @Column()
    barcode: string;

    @ManyToOne(() => Kategori, (kategori) => kategori.obats)
    @JoinColumn({ name: 'idKategori' }) 
    kategori: Kategori;

    @OneToMany(() => PembelianDetail, (pd) => pd.obat)
    pembelianDetails: PembelianDetail[];

    @OneToMany(() => StokBatch, (sb) => sb.obats)
    stokBatch: StokBatch[];

    @OneToMany(() => PenjualanDetail, (pd) => pd.obat)
    penjualanDetails: PenjualanDetail[];

    @OneToMany(() => StokOpnameDetail, (sod) => sod.obat)
    stokOpnameDetails: StokOpnameDetail[];

}
