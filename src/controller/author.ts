import { Request, Response } from "express";
import test from "../service/author";

async function createController(req: Request, res: Response) {
    const { name } = req.body;
    const create = await test.createService(name);
    return res.json(create);
}

async function readController(req: Request, res: Response) {
    const read = await test.readService();
    return res.json(read);
}

async function findById(req: Request, res: Response) {
    const { id } = req.params;
    const getId = await test.getById(Number(id));
    return res.json(getId);
}

async function updateController(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    await test.updateService(Number(id), name);
    return res.json({message:"Update success."});
}

async function deleteController(req: Request, res: Response) {
    const { id } = req.params;
    await test.deleteService(Number(id));
    return res.json({message:"Item deleted."});
}

export default { createController, readController, findById, updateController, deleteController };

