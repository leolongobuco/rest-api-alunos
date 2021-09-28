import Aluno from "../models/Aluno";

class AlunoController {
  async store(req, res) {
    const aluno = await Aluno.create({
      nome: "Maria",
      sobrenome: "Miranda",
      email: "maria@leo.com",
      idade: 23,
      peso: 57,
      altura: 1.7,
    });
    res.json(aluno);
  }
}

export default new AlunoController();
