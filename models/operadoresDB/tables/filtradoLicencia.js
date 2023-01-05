const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "filtradoLicencia",
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
      idtipoLicencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipoLicencia",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "filtradoLicencia",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "fil_tipoLicencia",
          using: "BTREE",
          fields: [{ name: "idtipoLicencia" }],
        },
        {
          name: "fil_FiltradotTipoLicencia",
          using: "BTREE",
          fields: [{ name: "idfiltrado" }],
        },
      ],
    }
  );
};
