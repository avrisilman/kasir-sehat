import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Distributor } from 'src/distributor/entities/distributor.entity';
import { PembelianDetail } from 'src/pembelian-detail/entities/pembelian-detail.entity';
import { ReturPembelian } from 'src/retur-pembelian/entities/retur-pembelian.entity';

@Entity()
export class Pembelian {
    @PrimaryGeneratedColumn('uuid')
    idPembelian: string;
  
    @Column()
    tanggalPembelian: string;
    
    @Column('int')
    total: number;

    @ManyToOne(() => Distributor, (distributor) => distributor.pembelians)
    distributor: Distributor;
    
    @OneToMany(() => PembelianDetail, (pd) => pd.pembelian)
    pembelianDetails: PembelianDetail[];

    @OneToMany(() => ReturPembelian, (returnPembelian) => returnPembelian.pembelian)
    returnPembelian: ReturPembelian[];

}
