const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "tipoLicenciaOperador",
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
      idtipoLicencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipoLicencia",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "tipoLicencia_Operador",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "idoperador",
          using: "BTREE",
          fields: [{ name: "idoperador" }],
        },
        {
          name: "tipoLicencia_Licencia",
          using: "BTREE",
          fields: [{ name: "idtipoLicencia" }],
        },
      ],
    }
  );
};
