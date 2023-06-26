import { AppDataSource } from "../data-source";
import { Libro } from "../entities/libro";
import libroDTO from "../interfaces/libro";


const libroRepository = AppDataSource.getRepository(Libro);

async function createService(libro: libroDTO) {
    const create = await libroRepository.save(libro);
    return create;

}

export default { createService };

