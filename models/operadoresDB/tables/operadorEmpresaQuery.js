const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "operadorEmpresaQuery",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idoperador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "operador",
          key: "id",
        },
      },
      idempresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "empresa",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "operadorEmpresaQuery",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "oeq_Operador",
          using: "BTREE",
          fields: [{ name: "idoperador" }],
        },
        {
          name: "oeq_Empresa",
          using: "BTREE",
          fields: [{ name: "idempresa" }],
        },
      ],
    }
  );
};
