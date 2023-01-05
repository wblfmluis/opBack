const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "filtradoExperienciaOperador",
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
      idexperienciaOperador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "experienciaOperador",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "filtradoExperienciaOperador",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "fil_Experiencia",
          using: "BTREE",
          fields: [{ name: "idexperienciaOperador" }],
        },
        {
          name: "fil_FiltradoExp",
          using: "BTREE",
          fields: [{ name: "idfiltrado" }],
        },
      ],
    }
  );
};
