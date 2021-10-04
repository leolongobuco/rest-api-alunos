import Aluno from "../models/Aluno";

class AlunoController {
  async store(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}

export default new AlunoController();
