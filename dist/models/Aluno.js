"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Name must be between 3 and 255 characters",
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Last name must be between 3 and 255 characters",
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          unique: {
            msg: "Email already exists",
          },
          validate: {
            isEmail: {
              msg: "Invalid E-mail",
            },
          },
        },
        idade: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Age must be an integer",
            },
          },
        },
        peso: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Height needs to be a number",
            },
          },
        },
        altura: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Height needs to be a number",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
} exports.default = Aluno;
