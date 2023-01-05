const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "preguntasCuestionario",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      pregunta: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tipoRespuesta: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      modeloTabla: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: "preguntasCuestionario",
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
