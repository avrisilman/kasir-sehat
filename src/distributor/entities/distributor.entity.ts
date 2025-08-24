import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pembelian } from '../../pembelian/entities/pembelian.entity';
import { StokBatch } from '../../stok-batch/entities/stok-batch.entity';

@Entity()
export class Distributor {
  @PrimaryGeneratedColumn('uuid')
  idDistributor: string;

  @Column()
  nama: string;

  @Column()
  alamat: string;

  @Column()
  kontak: string;

  @OneToMany(() => Pembelian, (pembelian) => pembelian.distributor)
  pembelians: Pembelian[];

  @OneToMany(() => StokBatch, (stokBatch) => stokBatch.distributor)
  stokBatchs: StokBatch[];
}
