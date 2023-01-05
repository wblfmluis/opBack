const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "plan",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      plan: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      creditoMin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: "creditoMin",
      },
      creditoMax: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: "creditoMax",
      },
      precioCredito: {
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
      tableName: "plan",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "creditoMax",
          unique: true,
          using: "BTREE",
          fields: [{ name: "creditoMax" }],
        },
        {
          name: "creditoMin",
          unique: true,
          using: "BTREE",
          fields: [{ name: "creditoMin" }],
        },
      ],
    }
  );
};
