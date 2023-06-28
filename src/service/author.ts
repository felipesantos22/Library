import { AppDataSource } from "../data-source";
import { Author } from "../entities/author";


// Por motivos desconhecidos ele não deixa criar o author usando DTO.
const authorRepository = AppDataSource.getRepository(Author);

async function createService(name: string) {
    const create = await authorRepository.save({ name });
    return create;
}

export default { createService };

