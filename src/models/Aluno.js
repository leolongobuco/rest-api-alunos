import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Name must be between 3 and 255 characters",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Last name must be between 3 and 255 characters",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
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
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Age must be an integer",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Height needs to be a number",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
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
}
