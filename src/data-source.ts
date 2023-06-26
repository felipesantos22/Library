import "reflect-metadata"
import { DataSource } from "typeorm"
import { Libro } from "./entities/libro"
import { Author } from "./entities/author"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "library",
    synchronize: true,
    logging: true,
    entities: [Libro, Author],
    subscribers: [],
    migrations: [],
})

