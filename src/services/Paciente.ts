import { PrismaClient } from '@prisma/client';

class PacienteServices {
  private prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }

  // Create a new Paciente
  async createPaciente(nome: string, senha: string, user: string) {
    const paciente = await this.prisma.paciente.create({
      data: {
        nome,
        senha,
        user
      }
    });

    return paciente;
  }

  // Read all Pacientes
  async readPacientes() {
    const pacientes = await this.prisma.paciente.findMany();

    return pacientes;
  }

  // Read a single Paciente by ID
  async readPacienteById(id: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id },
    });

    return paciente;
  }

  // Update a Paciente
  async updatePaciente(id: number, nome: string, senha: string, user: string) {
    const paciente = await this.prisma.paciente.update({
      where: { id },
      data: {
        nome,
        senha,
        user,
      },
    });

    return paciente;
  }

  // Delete a Paciente by ID
  async deletePaciente(id: number) {
    await this.prisma.paciente.delete({
      where: { id },
    });
  }

  

}

export default PacienteServices