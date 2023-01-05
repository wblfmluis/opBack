const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filtradoFormaPago', {
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
    idformaPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formaPago',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'filtradoFormaPago',
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
        name: "fil_FormaPago",
        using: "BTREE",
        fields: [
          { name: "idformaPago" },
        ]
      },
      {
        name: "fil_FiltradoFormaPago",
        using: "BTREE",
        fields: [
          { name: "idfiltrado" },
        ]
      },
    ]
  });
};
