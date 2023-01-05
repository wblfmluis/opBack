const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "mailLog",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      from: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: "",
      },
      to: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      responseState: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      messageId: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "mailLog",
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
