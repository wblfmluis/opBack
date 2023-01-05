const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpais: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'estado',
        key: 'id'
      }
    },
    nombreEmpresa: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    nombreContactoEmpresa: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    apellidoContactoEmpresa: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    emailEmpresa: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    passwordEmpresa: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    direccionEmpresa: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    telefonoEmpresa: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fechaRegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ccEmail: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'empresa',
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
        name: "empresaEstado",
        using: "BTREE",
        fields: [
          { name: "idestado" },
        ]
      },
    ]
  });
};
