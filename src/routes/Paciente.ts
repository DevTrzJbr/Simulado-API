import { Router } from "express";
import PacienteController from "../controllers/Paciente";

const PacienteRouter = Router();

PacienteRouter.post("/create", PacienteController.createPaciente);
PacienteRouter.get("/read", PacienteController.readPacientes);
PacienteRouter.put("/update", PacienteController.updatePaciente);
PacienteRouter.delete("/delete", PacienteController.deletePaciente);

export default PacienteRouter