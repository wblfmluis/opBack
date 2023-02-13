const Sequelize = require("sequelize");
module.exports = function (sequelize) {
    return sequelize.define(
        "permisoUsuario",
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            idusuario: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            idfuncion: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            sequelize,
            tableName: "permisoUsuario",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "funcionPermiso",
                    using: "BTREE",
                    fields: [{ name: "idfuncion" }],
                },
                {
                    name: "usuarioPermiso",
                    using: "BTREE",
                    fields: [{ name: "idusuario" }],
                },
            ],
        }
    );
};
