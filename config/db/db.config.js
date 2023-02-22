module.exports = {
  HOST: "10.10.22.26",
  USER: "dev",
  PASSWORD: "Zoe.kameron1",
  DB: "trans164_sistema",
  dialect: "mysql",
  define: {
    freezeTableName: true,
    charset: "utf8",
    dialectOptions: {
      collate: "utf8_bin",
    },
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
