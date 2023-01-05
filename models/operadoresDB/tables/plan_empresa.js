const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "planEmpresa",
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
      idplan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "plan",
          key: "id",
        },
      },
      fechaContratacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      precioUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      subTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      precioTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      descuento: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      saldoInicial: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      saldoActual: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "plan_empresa",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "plan_Empresa",
          using: "BTREE",
          fields: [{ name: "idempresa" }],
        },
        {
          name: "plan_Plan",
          using: "BTREE",
          fields: [{ name: "idplan" }],
        },
      ],
    }
  );
};
