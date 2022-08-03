import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('')
export class AnimeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    name: string;

    @Column({ default: '' })
    category: string;

    @Column({ default: '' })
    descr: string;

    @Column({ type: 'boolean', default: false })
    IsEnded: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createAT: Date;



}