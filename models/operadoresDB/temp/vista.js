const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vista', {
    idvista: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreVista: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcionVista: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rutaVista: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    statusVista: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vista',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvista" },
        ]
      },
    ]
  });
};
