
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Obat } from 'src/obat/entities/obat.entity';

@Entity()
export class Kategori {
    @PrimaryGeneratedColumn('uuid')
    idKategori: string;
  
    @Column()
    namaKategori: string;

    @OneToMany(() => Obat, (obat) => obat.kategori)
    obats: Obat[];
}
