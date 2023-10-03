import express from 'express';

import HomeRouter from './Home';
import PacienteRouter from './Paciente';
import secretariasRouter from './Secretaria';

const router = express.Router();

router.use("/", HomeRouter)
router.use('/paciente', PacienteRouter);
// router.use('/consultas', consultasRouter);
// router.use('/agendas', agendasRouter);
router.use('/secretarias', secretariasRouter);

export default router