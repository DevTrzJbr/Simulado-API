import { Request, Response } from 'express';
import SecretariaServices from '../services/Secretaria';

class SecretariaController {
    private secretariaServices: SecretariaServices;

    constructor() {
        this.secretariaServices = new SecretariaServices();
    }

    async create(req: Request, res: Response) {
        const { nome, RG } = req.body;
        if (!nome || !RG) {
            res.status(500).json({ message: "ERRO: Informações faltando!" })
        }

        try {
            const secretaria = await this.secretariaServices.createSecretaria(nome, RG);
            return res.status(200).json(secretaria);
        } catch (err) {
            res.status(501).json({ message: "Erro" })
        }
    }

    async read(req: Request, res: Response) {
        try {
            const secretarias = await this.secretariaServices.readSecretaria();
            return res.status(200).json(secretarias);
        } catch(err){
            res.status(501).json({
                message: "Erro"
            })
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, RG } = req.body;
        if( !id || !nome || ! RG) {
            res.status(500).json({
                message: "ERRO: Informação faltando!"
            })
        }

        try{
            const secretaria = await this.secretariaServices.updateSecretaria(Number(id), nome, RG);
            return res.status(200).json(secretaria);
        } catch (err){
            res.status(501).json({
                message: "ERRO"
            })
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        if(!id){
            res.status(500).json({
                message: "ERRO: Informação faltando!"
            })
        }

        try {
            const secretaria = await this.secretariaServices.deleteSecretaria(Number(id));
            return res.json(secretaria);
        } catch(err){
            res.status(501).json({
                message: "ERRO"
            })
        }
    }
}

export default SecretariaController