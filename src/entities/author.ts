import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Libro } from "./libro"

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Libro, (libro) => libro.author)
    libro: Libro[]
}