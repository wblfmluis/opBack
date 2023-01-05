const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "operador",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idestado: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idedadOperador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "edadOperador",
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
      idtipoUnidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tipoUnidad",
          key: "id",
        },
      },
      idformaPago: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "formaPago",
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
      idtipoLicencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      aptoMedico: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      numeroEmpresas: {
        type: Sequelize.STRING(11),
        allowNull: true,
        defaultValue: "0",
      },
      nombreOperador: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      apellidoOperador: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      celularOperador: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      emailOperador: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      passwordOperador: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      euaCanada: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      fechaRegistro: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      observaciones: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      expAptoMedico: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "operador",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "edadOperador",
          using: "BTREE",
          fields: [{ name: "idedadOperador" }],
        },
        {
          name: "experienciaOperador",
          using: "BTREE",
          fields: [{ name: "idexperienciaOperador" }],
        },
        {
          name: "tipoUnidadOperador",
          using: "BTREE",
          fields: [{ name: "idtipoUnidad" }],
        },
        {
          name: "formaPagoOperador",
          using: "BTREE",
          fields: [{ name: "idformaPago" }],
        },
        {
          name: "tipoServicioOperador",
          using: "BTREE",
          fields: [{ name: "idtipoServicio" }],
        },
      ],
    }
  );
};
