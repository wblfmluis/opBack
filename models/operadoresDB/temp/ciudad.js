const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ciudad', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'estado',
        key: 'id'
      }
    },
    nombreCiudad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    statusCiudad: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ciudad',
    timestamps: true,
    indexes: [
      {
        name: "ciudadEstado",
        using: "BTREE",
        fields: [
          { name: "idestado" },
        ]
      },
    ]
  });
};
