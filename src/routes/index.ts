import express from 'express';

import HomeRouter from './Home';
import PacienteRouter from './Paciente';
import { consultaRouter } from './Consulta';
import secretariasRouter from './Secretaria';
import { agendaRouter } from './Agenda';

const router = express.Router();

router.use("/", HomeRouter)
router.use('/paciente', PacienteRouter);
router.use('/consultas', consultaRouter);
router.use('/agendas', agendaRouter);
router.use('/secretarias', secretariasRouter);

export default router