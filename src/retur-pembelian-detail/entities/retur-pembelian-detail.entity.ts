import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { StokBatch } from 'src/stok-batch/entities/stok-batch.entity';
import { ReturPembelian } from 'src/retur-pembelian/entities/retur-pembelian.entity';

@Entity()
export class ReturPembelianDetail {
    @PrimaryGeneratedColumn('uuid')
    idDetail: string;

    @Column()
    jumlahRetur: string;

    @ManyToOne(() => StokBatch, (stokBatch) => stokBatch.returPembelianDetails)
    stokBatch: StokBatch;

    @ManyToOne(() => ReturPembelian, (returPembelian) => returPembelian.returPembelianDetail)
    returPembelian: ReturPembelian;
}
