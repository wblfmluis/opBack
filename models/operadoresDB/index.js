const config = require("../../config/db/db.config");
const Sequelize = require("sequelize");
const { initModels } = require("./init-models");
let dbOp = {};

try {
  const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: 3308,
    dialect: config.dialect,
    operatorAliases: false,
    timezone: "-06:00",
    pool: {
      min: 0,
      max: 5,
      idle: 50000,
    },
  });
  dbOp.Sequelize = Sequelize;
  dbOp.sequelize = sequelize;
  dbOp.models = initModels(sequelize);
} catch (e) {
  console.log(`Error while starting DB Sync: ${e}`);
}

module.exports = dbOp;
