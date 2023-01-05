const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminOperador', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtransaccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idoperador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'operador',
        key: 'id'
      }
    },
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'id'
      }
    },
    fechaFiltrado: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'adminOperador',
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
        name: "adm_Operador",
        using: "BTREE",
        fields: [
          { name: "idoperador" },
        ]
      },
      {
        name: "adm_Empresa",
        using: "BTREE",
        fields: [
          { name: "idempresa" },
        ]
      },
    ]
  });
};
