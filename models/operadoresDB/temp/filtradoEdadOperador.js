const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filtradoEdadOperador', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfiltrado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'filtradoEmpresa',
        key: 'id'
      }
    },
    idedadOperador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'edadOperador',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'filtradoEdadOperador',
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
        name: "fil_Edad",
        using: "BTREE",
        fields: [
          { name: "idedadOperador" },
        ]
      },
      {
        name: "fil_FiltradoEdad",
        using: "BTREE",
        fields: [
          { name: "idfiltrado" },
        ]
      },
    ]
  });
};
