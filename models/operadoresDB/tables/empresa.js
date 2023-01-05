const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "empresa",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idpais: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      idestado: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "estado",
          key: "id",
        },
      },
      nombreEmpresa: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      nombreContactoEmpresa: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      apellidoContactoEmpresa: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      emailEmpresa: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      passwordEmpresa: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      direccionEmpresa: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      telefonoEmpresa: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      fechaRegistro: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ccEmail: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: "empresa",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "empresaEstado",
          using: "BTREE",
          fields: [{ name: "idestado" }],
        },
      ],
    }
  );
};
