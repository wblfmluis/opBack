const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reciboEmpresa', {
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
    idplanEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'plan_empresa',
        key: 'id'
      }
    },
    tipoPago: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    granTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    fechaContratacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rfc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nombreRazonSocial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    calle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numeroExt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    numeroInt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    colonia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cp: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tipoCfdi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    idcfdi: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'reciboEmpresa',
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
        name: "reciboEmpresa",
        using: "BTREE",
        fields: [
          { name: "idempresa" },
        ]
      },
      {
        name: "reciboPlan",
        using: "BTREE",
        fields: [
          { name: "idplanEmpresa" },
        ]
      },
    ]
  });
};
