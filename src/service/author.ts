import { AppDataSource } from "../data-source";
import { Author } from "../entities/author";


// Por motivos desconhecidos ele não deixa criar o author usando DTO.
const authorRepository = AppDataSource.getRepository(Author);

async function createService(name: string) {
    const create = await authorRepository.save({ name });
    return create;
}

async function readService() {
    const read = await authorRepository.find({
        relations: {
            libro: true
        }
    })
    return read;
}

async function getById(id: number) {
    const getId = await authorRepository.findOneBy({
        id,
    });
    return getId;
}

async function updateService(id: number, name: string) {
    const update = await authorRepository.update(id, { name });
    return update;
}
async function deleteService(id: number) {
    const deleteAuthor = await authorRepository.delete({ id });
    return deleteAuthor;
}


export default { createService, readService, getById, updateService, deleteService };

