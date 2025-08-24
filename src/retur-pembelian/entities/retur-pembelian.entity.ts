import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Pembelian } from 'src/pembelian/entities/pembelian.entity';
import { ReturPembelianDetail } from 'src/retur-pembelian-detail/entities/retur-pembelian-detail.entity';

@Entity()
export class ReturPembelian {
    @PrimaryGeneratedColumn('uuid')
    idRetur: string;

    @Column()
    tanggalRetur: string;

    @Column()
    alasan: string;

    @ManyToOne(() => Pembelian, (pembelian) => pembelian.pembelianDetails)
    pembelian: Pembelian;

    @OneToMany(() => ReturPembelianDetail, (returPembelianDetail) => returPembelianDetail.returPembelian)
    returPembelianDetail: ReturPembelianDetail[];

}
