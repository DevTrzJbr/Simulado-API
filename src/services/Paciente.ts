import { PrismaClient } from '@prisma/client';

interface IcreatePaciente {
  nome: string,
  senha: string,
  user: string,
}

interface IupdatePaciente {
  nome?: string, 
  senha?: string, 
  user?: string,
}

class PacienteServices {
  private prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }

  // Create a new Paciente
  async createPaciente(data: IcreatePaciente) {
    const paciente = await this.prisma.paciente.create({ data });

    return paciente;
  }

  // Read all Pacientes
  async readPacientes() {
    const pacientes = await this.prisma.paciente.findMany({
      // private senha e user       
      select: {
        id: true,
        nome: true,
      },
    });

    return pacientes;
  }

  // Read a single Paciente by ID
  async readPacienteById(id: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id },
      // private senha e user       
      select: {
        id: true,
        nome: true,
      },
    });

    return paciente;
  }

  // Update a Paciente
  async updatePaciente(id: number, data: IupdatePaciente) {
    const paciente = await this.prisma.paciente.update({
      where: { id },
      data
    });

    return paciente;
  }

  // Delete a Paciente by ID
  async deletePaciente(id: number) {
    await this.prisma.consulta.deleteMany({
      where: { pacienteId: id },
    });
    await this.prisma.paciente.delete({
      where: { id },
      // private senha e user       
      select: {
        id: true,
        nome: true,
      },
    });
  }



}

export default PacienteServices