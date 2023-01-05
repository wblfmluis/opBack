const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "descuento",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      codigo: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: "codigo",
      },
      porcentaje: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: "descuento",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "codigo",
          unique: true,
          using: "BTREE",
          fields: [{ name: "codigo" }],
        },
      ],
    }
  );
};
