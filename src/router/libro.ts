import { Router } from 'express';
import libroController from '../controller/libro'

const libroRouter = Router();

libroRouter.post('/libro', libroController.createController)

export default libroRouter;