import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StokOpnameDetail } from 'src/stok-opname-detail/entities/stok-opname-detail.entity';

@Entity()
export class StokOpname {
    @PrimaryGeneratedColumn('uuid')
    idOpname: string;

    @Column()
    tanggal: string;

    @Column()
    idUser: string;

    @OneToMany(() => StokOpnameDetail, (sd) => sd.stokOpname)
    stokOpnameDetails: StokOpnameDetail[];
}
