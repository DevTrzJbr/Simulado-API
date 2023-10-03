import { Router } from 'express';
import SecretariaController from '../controllers/Secretaria';

const secretariasRouter = Router();
const secretariaController = new SecretariaController();

secretariasRouter.post('/create', secretariaController.create);
secretariasRouter.get('/', secretariaController.read);
secretariasRouter.put('/:id', secretariaController.update);
secretariasRouter.delete('/:id', secretariaController.delete);

export default secretariasRouter;
