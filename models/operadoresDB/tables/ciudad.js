const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ciudad",
    {
      idciudad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idestado: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "estado",
          key: "id",
        },
      },
      nombreCiudad: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      statusCiudad: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "ciudad",
      timestamps: true,
      indexes: [
        {
          name: "ciudadEstado",
          using: "BTREE",
          fields: [{ name: "idestado" }],
        },
      ],
    }
  );
};
