const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "tipoOperacionOperador",
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
      idtipoOperacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipoOperacion",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "tipoOperacion_Operador",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "tipoOp_Operador",
          using: "BTREE",
          fields: [{ name: "idoperador" }],
        },
        {
          name: "tipoOp_Operacion",
          using: "BTREE",
          fields: [{ name: "idtipoOperacion" }],
        },
      ],
    }
  );
};
