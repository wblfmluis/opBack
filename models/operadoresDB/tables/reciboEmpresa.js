const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "reciboEmpresa",
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
      idplanEmpresa: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "plan_empresa",
          key: "id",
        },
      },
      tipoPago: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      subTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      descuento: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      granTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      fechaContratacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      rfc: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      nombreRazonSocial: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      calle: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      numeroExt: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      numeroInt: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      colonia: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      ciudad: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      estado: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      cp: {
        type: Sequelize.STRING(5),
        allowNull: true,
      },
      tipoCfdi: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      idcfdi: {
        type: Sequelize.STRING(300),
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
      tableName: "reciboEmpresa",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "reciboEmpresa",
          using: "BTREE",
          fields: [{ name: "idempresa" }],
        },
        {
          name: "reciboPlan",
          using: "BTREE",
          fields: [{ name: "idplanEmpresa" }],
        },
      ],
    }
  );
};
