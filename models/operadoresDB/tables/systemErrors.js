const Sequelize = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define(
    "systemErrors",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      function: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      inputData: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      errorMessage: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "systemErrors",
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
