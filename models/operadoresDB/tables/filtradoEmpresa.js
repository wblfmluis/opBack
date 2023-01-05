const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "filtradoEmpresa",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idempresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "empresa",
          key: "id",
        },
      },
      fechaFiltrado: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      sqlQuery: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "filtradoEmpresa",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "filtradoEmpresa",
          using: "BTREE",
          fields: [{ name: "idempresa" }],
        },
      ],
    }
  );
};
