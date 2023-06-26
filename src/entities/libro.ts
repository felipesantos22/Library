import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Author } from "./author"

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    year: Number

    @ManyToOne(() => Author, (author) => author.libro)
    author: Author
}