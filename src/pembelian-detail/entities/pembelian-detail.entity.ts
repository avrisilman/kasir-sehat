import { Obat } from 'src/obat/entities/obat.entity';
import { Pembelian } from 'src/pembelian/entities/pembelian.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class PembelianDetail {
    @PrimaryGeneratedColumn('uuid')
    idDetail: string;

    @Column()
    jumlah: number;

    @Column()
    hargaBeli: string;

    @Column()
    tanggalExpired: string;

    @ManyToOne(() => Obat, (obat) => obat.pembelianDetails)
    @JoinColumn({ name: 'idObat' }) 
    obat: Obat;

    @ManyToOne(() => Pembelian, (pembelian) => pembelian.pembelianDetails)
    @JoinColumn({ name: 'idPembelian' }) 
    pembelian: Pembelian;

}
