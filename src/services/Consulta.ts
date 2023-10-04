import { PrismaClient, Consulta } from '@prisma/client';

export class ConsultaService {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
    async createConsulta(nomePaciente: string, nomeDentista: string) {
        const consulta = await this.prisma.consulta.create({
            data: {
                data: new Date(),
                nomePaciente,
                nomeDentista
            }
        });
        return consulta;
    }

    async getConsulta(id: number) {
        const consulta = await this.prisma.consulta.findUnique({
            where: {
                id,
            },
        });
        return consulta;
    }

    async getAllConsultas() {
        const consultas = await this.prisma.consulta.findMany();
        return consultas;
    }

    async updateConsulta(id: number, data: Partial<Consulta>) {
        const consulta = await this.prisma.consulta.update({
            where: {
                id,
            },
            data,
        });
        return consulta;
    }

    async deleteConsulta(id: number) {
        const consulta = await this.prisma.consulta.delete({
            where: {
                id,
            },
        });
        return consulta;
    }
}
