import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    author: string
}