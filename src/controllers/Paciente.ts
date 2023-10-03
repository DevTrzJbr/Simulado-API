import { Request, Response } from "express";
import { Paciente } from "@prisma/client";
import PacienteServices from "../services/Paciente"

const paciente = new PacienteServices()

class PacienteController {
    constructor() {}

    // Create a new Paciente
    async createPaciente(req: Request, res: Response) {
        const paciente = req.body
        if (!paciente) {
            res.status(500)
            res.json("Erro")
        }
        try {
            const novoPaciente = await paciente.createPaciente(paciente.nome, paciente.senha, paciente.user);

            res.status(200)
            res.json(novoPaciente)

            return novoPaciente;

        } catch (err) {
            res.status(501)
            res.json({ message: 'Erro ao criar paciente' })
            console.log(err)
        }
    }

    // Read all Pacientes
    async readPacientes(req: Request, res: Response) {
        try {
            const pacientes = await paciente.readPacientes();

            res.status(200)
            res.json(pacientes)
        } catch (err) {
            console.log(err)
            res.status(501)
            res.json({ message: "Erro na leitura de pacientes" })
        }

    }

    // Update a Paciente
    async updatePaciente(req: Request, res: Response) {
        const id = req.body.id;
        const paciente = req.body.paciente;

        try {
            const pacienteAtualizado = await paciente.updatePaciente(id, paciente.nome, paciente.senha, paciente.user);

            res.status(200);
            res.json(pacienteAtualizado);
        } catch (err) {
            console.log(err)
            res.status(500);
            res.json({ message: 'Erro na atualização do paciente' });
        }
    }

    // Delete a Paciente by ID
    async deletePaciente(req: Request, res: Response) {
        const id = req.body.id;

        try {
            const pacienteDelete = await paciente.deletePaciente(id);

            res.status(200);
            res.json({ message: 'Paciente excluído com sucesso', pacienteDelete});
        } catch (err) {
            console.log(err)
            res.status(500);
            res.json({ message: 'Erro na exclusão do paciente' });
        }
    }

}

export default new PacienteController()

