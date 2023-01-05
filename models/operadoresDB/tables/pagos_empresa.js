const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "pagosEmpresa",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombrePlan: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      precioPagado: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      descuento: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      fechaPago: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "pagos_empresa",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
