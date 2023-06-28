import { Router } from "express";
import create from '../controller/author'

const authorRouter = Router();

authorRouter.post('/author', create.createController);
authorRouter.get('/author',  create.readController);
authorRouter.get('/author/:id', create.findById);
authorRouter.delete('/author/:id', create.deleteController);
authorRouter.put('/author/:id', create.updateController);

export default authorRouter;

