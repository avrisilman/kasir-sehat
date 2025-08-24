import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Obat } from 'src/obat/entities/obat.entity';
import { StokBatch } from 'src/stok-batch/entities/stok-batch.entity';
import { Penjualan } from 'src/penjualan/entities/penjualan.entity';

@Entity()
export class PenjualanDetail {
    @PrimaryGeneratedColumn('uuid')
    idDetail: string;

    @Column()
    jumlah: string;

    @Column()
    hargaJual: string;
    
    @ManyToOne(() => Obat, (obat) => obat.pembelianDetails)
    obat: Obat;

    @ManyToOne(() => StokBatch, (stokBatch) => stokBatch.penjualanDetails)
    stokBatch: StokBatch;

    @ManyToOne(() => Penjualan, (penjualan) => penjualan.penjualanDetails)
    penjualan: Penjualan;

}
