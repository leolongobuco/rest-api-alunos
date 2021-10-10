"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _File = require('../models/File'); var _File2 = _interopRequireDefault(_File);

class AlunoController {
  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [_File2.default, "id", "DESC"],
        ],
        include: {
          model: _File2.default,
          attributes: ["url", "id", "originalname", "filename"],
        },
      });
      return res.status(200).json(alunos);
    } catch (error) {
      return res.status(404).json(null);
    }
  }

  async show(req, res) {
    try {
      const { userId } = req.params;
      if (!userId) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }

      const aluno = await _Aluno2.default.findByPk(userId, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [_File2.default, "id", "DESC"],
        ],
        include: {
          model: _File2.default,
          attributes: ["url", "id", "originalname", "filename"],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno doesn't exist"],
        });
      }

      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json("Aluno not found");
    }
  }

  async update(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }

      const aluno = await _Aluno2.default.findByPk(userId);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno doesn't exist"],
        });
      }

      const newData = await aluno.update(req.body);
      return res.status(200).json(newData);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((error) => error.message) });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }

      const aluno = await _Aluno2.default.findByPk(userId);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno doesn't exist"],
        });
      }

      await aluno.destroy();
      return res.status(204).json(null);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }
}

exports. default = new AlunoController();
