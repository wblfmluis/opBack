const Sequelize = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "funciones",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      idvista: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: "funciones",
      timestamps: true,
      indexes: [
        {
          name: "funcionVista",
          using: "BTREE",
          fields: [{ name: "idvista" }],
        },
      ],
    }
  );
};
