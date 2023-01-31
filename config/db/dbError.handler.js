const opDb = require("../../models/operadoresDB");
const Sequelize = require("sequelize");

const saveError = async (fun, input, err) => {
  try {
    await opDb.models.systemErrors.create({
      function: fun,
      inputData: JSON.stringify(input),
      errorMessage: err.toString(),
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  saveError,
};
