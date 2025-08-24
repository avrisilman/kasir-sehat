import { PenjualanDetail } from 'src/penjualan-detail/entities/penjualan-detail.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Penjualan {
    @PrimaryGeneratedColumn('uuid')
    idPenjualan: string;

    @Column()
    tanggal: string;

    @Column()
    total: string;

    @Column()
    metodeBayar: string;

    @OneToMany(() => PenjualanDetail, (pd) => pd.penjualan)
    penjualanDetails: PenjualanDetail[];
}
