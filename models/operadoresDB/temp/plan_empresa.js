const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planEmpresa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'id'
      }
    },
    idplan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plan',
        key: 'id'
      }
    },
    fechaContratacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    precioUnitario: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    subTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    precioTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    saldoInicial: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saldoActual: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'plan_empresa',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "plan_Empresa",
        using: "BTREE",
        fields: [
          { name: "idempresa" },
        ]
      },
      {
        name: "plan_Plan",
        using: "BTREE",
        fields: [
          { name: "idplan" },
        ]
      },
    ]
  });
};
