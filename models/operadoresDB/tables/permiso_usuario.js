const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "permisoUsuario",
    {
      idpermiso_usuario: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idadmUsuario: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      idvista: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lectura: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      escritura: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "permiso_usuario",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idpermiso_usuario" }],
        },
      ],
    }
  );
};
