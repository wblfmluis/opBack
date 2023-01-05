const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "emailDestinatarios",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      emailList: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "emailDestinatarios",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
