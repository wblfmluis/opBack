const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operador', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idedadOperador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'edadOperador',
        key: 'id'
      }
    },
    idexperienciaOperador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'experienciaOperador',
        key: 'id'
      }
    },
    idtipoUnidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipoUnidad',
        key: 'id'
      }
    },
    idformaPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formaPago',
        key: 'id'
      }
    },
    idtipoServicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipoServicio',
        key: 'id'
      }
    },
    idtipoLicencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aptoMedico: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    numeroEmpresas: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "0"
    },
    nombreOperador: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    apellidoOperador: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    celularOperador: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    emailOperador: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    passwordOperador: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    euaCanada: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    fechaRegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    expAptoMedico: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'operador',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "edadOperador",
        using: "BTREE",
        fields: [
          { name: "idedadOperador" },
        ]
      },
      {
        name: "experienciaOperador",
        using: "BTREE",
        fields: [
          { name: "idexperienciaOperador" },
        ]
      },
      {
        name: "tipoUnidadOperador",
        using: "BTREE",
        fields: [
          { name: "idtipoUnidad" },
        ]
      },
      {
        name: "formaPagoOperador",
        using: "BTREE",
        fields: [
          { name: "idformaPago" },
        ]
      },
      {
        name: "tipoServicioOperador",
        using: "BTREE",
        fields: [
          { name: "idtipoServicio" },
        ]
      },
    ]
  });
};
