const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "sesionValidacion",
        {
            id: {
                autoIncrement: true,
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            idusuario: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            fechaInicio: {
              type: Sequelize.DATE,
              allowNull: true
            },
            fechaFin: {
              type: Sequelize.DATE,
              allowNull: true
            },
        },
        {
            sequelize,
            tableName: "sesionValidacion",
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "idusuario",
                    using: "BTREE",
                    fields: [{ name: "idusuario" }],
                },
            ],
        }
    );
};
