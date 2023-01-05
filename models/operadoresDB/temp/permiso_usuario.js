const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permisoUsuario', {
    idpermiso_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idadmUsuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idvista: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lectura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    escritura: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'permiso_usuario',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpermiso_usuario" },
        ]
      },
    ]
  });
};
