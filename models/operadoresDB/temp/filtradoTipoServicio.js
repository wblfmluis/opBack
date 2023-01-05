const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filtradoTipoServicio', {
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
    idtipoServicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipoServicio',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'filtradoTipoServicio',
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
        name: "fil_TipoServicio",
        using: "BTREE",
        fields: [
          { name: "idtipoServicio" },
        ]
      },
      {
        name: "fil_FiltradoTipoServicio",
        using: "BTREE",
        fields: [
          { name: "idfiltrado" },
        ]
      },
    ]
  });
};
