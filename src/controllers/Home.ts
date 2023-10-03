
import { Request, Response } from "express";

class HomeController {
    constructor() { }

    // Create a new Paciente
    async createPaciente(req: Request, res: Response) {
        res.status(200)
        res.json(
            {message: "Olá mundo!"}
        )

    }
}

export default new HomeController()