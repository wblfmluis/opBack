const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "vista",
    {
      idvista: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombreVista: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      descripcionVista: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      rutaVista: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      statusVista: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "vista",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idvista" }],
        },
      ],
    }
  );
};
