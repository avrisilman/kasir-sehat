import { Entity, PrimaryGeneratedColumn, Column, IntegerType, ManyToOne } from 'typeorm';
import { Obat } from 'src/obat/entities/obat.entity';
import { StokOpname } from 'src/stok-opname/entities/stok-opname.entity';

@Entity()
export class StokOpnameDetail {
    @PrimaryGeneratedColumn('uuid')
    idDetail: string;

    @Column()
    idOpname: string;

    @Column()
    idObat: string;

    @Column()
    stokTercatat: string;

    @Column()
    stokFisik: string;

    @Column()
    selisih: string;

    @Column()
    keterangan: string;

    @ManyToOne(() => Obat, (obat) => obat.pembelianDetails)
    obat: Obat;

    @ManyToOne(() => StokOpname, (stokOpname) => stokOpname.stokOpnameDetails)
    stokOpname: StokOpname;
}
