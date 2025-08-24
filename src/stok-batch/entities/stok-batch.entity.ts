import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Distributor } from 'src/distributor/entities/distributor.entity';
import { Obat } from 'src/obat/entities/obat.entity';
import { PenjualanDetail } from 'src/penjualan-detail/entities/penjualan-detail.entity';
import { ReturPembelianDetail } from 'src/retur-pembelian-detail/entities/retur-pembelian-detail.entity';

@Entity()
export class StokBatch {
    @PrimaryGeneratedColumn('uuid')
    idBatch: string;

    @Column()
    jumlahAwal: string;
    
    @Column()
    jumlahTerpakai: string;

    @Column()
    tanggalExpired: string;

    @Column()
    hargaBeli: string;

    @Column()
    tanggalMasuk: string;

    @ManyToOne(() => Distributor, (distributor) => distributor.pembelians)
    distributor: Distributor;
   
    @ManyToOne(() => Obat, (obat) => obat.stokBatch)
    obats: Obat;

    @OneToMany(() => PenjualanDetail, (pd) => pd.stokBatch)
    penjualanDetails: PenjualanDetail[];

    @OneToMany(() => ReturPembelianDetail, (returPembelianDetail) => returPembelianDetail.stokBatch)
    returPembelianDetails: ReturPembelianDetail[];

}
