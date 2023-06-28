import { Request, Response } from "express";
import test from "../service/author";

async function createController(req: Request, res: Response) {
    const { name } = req.body;
    const create = await test.createService(name);
    return res.json(create);
}

export default { createController };

