const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filtradoEstado', {
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
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estado',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'filtradoEstado',
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
        name: "fil_Estado",
        using: "BTREE",
        fields: [
          { name: "idestado" },
        ]
      },
      {
        name: "fil_Filtrado",
        using: "BTREE",
        fields: [
          { name: "idfiltrado" },
        ]
      },
    ]
  });
};
