import { Request, Response } from "express";
import libro from '../service/libro'


async function createController(req: Request, res: Response) {
    const { name, year, authorId } = req.body;
    const create = await libro.createService({ name, year, authorId });
    return res.json(create);
}

export default { createController }