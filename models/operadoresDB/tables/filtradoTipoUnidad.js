const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "filtradoTipoUnidad",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idfiltrado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "filtradoEmpresa",
          key: "id",
        },
      },
      idtipoUnidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipoUnidad",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "filtradoTipoUnidad",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "fil_TipoUnidad",
          using: "BTREE",
          fields: [{ name: "idtipoUnidad" }],
        },
        {
          name: "fil_FiltradoTipoUnidad",
          using: "BTREE",
          fields: [{ name: "idfiltrado" }],
        },
      ],
    }
  );
};
