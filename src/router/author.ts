import { Router } from "express";
import create from '../controller/author'

const authorRouter = Router();

authorRouter.post('/author', create.createController);

export default authorRouter;

