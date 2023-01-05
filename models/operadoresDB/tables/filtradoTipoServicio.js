const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "filtradoTipoServicio",
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
      idtipoServicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipoServicio",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "filtradoTipoServicio",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "fil_TipoServicio",
          using: "BTREE",
          fields: [{ name: "idtipoServicio" }],
        },
        {
          name: "fil_FiltradoTipoServicio",
          using: "BTREE",
          fields: [{ name: "idfiltrado" }],
        },
      ],
    }
  );
};
