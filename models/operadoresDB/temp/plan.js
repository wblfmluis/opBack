const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    creditoMin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "creditoMin"
    },
    creditoMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "creditoMax"
    },
    precioCredito: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'plan',
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
        name: "creditoMax",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "creditoMax" },
        ]
      },
      {
        name: "creditoMin",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "creditoMin" },
        ]
      },
    ]
  });
};
