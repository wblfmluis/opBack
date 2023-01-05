const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagosEmpresa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombrePlan: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    precioPagado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    fechaPago: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pagos_empresa',
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
    ]
  });
};
