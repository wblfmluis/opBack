const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filtradoPrestacion', {
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
    tableName: 'filtradoPrestacion',
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
        name: "fil_Prestacion",
        using: "BTREE",
        fields: [
          { name: "idprestacion" },
        ]
      },
      {
        name: "fil_FiltradoPrestacion",
        using: "BTREE",
        fields: [
          { name: "idfiltrado" },
        ]
      },
    ]
  });
};
