const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prestacionesOperador', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idoperador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'operador',
        key: 'id'
      }
    },
    idprestacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'prestaciones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'prestaciones_Operador',
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
        name: "pres_Operador",
        using: "BTREE",
        fields: [
          { name: "idoperador" },
        ]
      },
      {
        name: "pres_Prestacion",
        using: "BTREE",
        fields: [
          { name: "idprestacion" },
        ]
      },
    ]
  });
};
