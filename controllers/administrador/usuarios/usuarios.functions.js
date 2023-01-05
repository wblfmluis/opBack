const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

const addUser = async (inputData) => {
  try {
    let password = inputData.password;
    inputData.password = bcrypt.hashSync(password, 8);
    return await opDb.models.admUsuarios.create(inputData);
  } catch (e) {
    await errorHandler.saveError("addUser", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const updateUser = async (inputData, iduser) => {
  try {
    if (inputData.password) {
      let password = inputData.password;
      inputData.password = bcrypt.hashSync(password, 8);
    }
    return await opDb.models.admUsuarios.update(inputData, {
      where: {
        id: iduser,
      },
    });
  } catch (e) {
    inputData.whereClause = { id: iduser };
    await errorHandler.saveError("updateUser", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const deactivateUser = async (inputData) => {
  try {
    return opDb.models.admUsuarios.update(
      { status: 0 },
      { where: { id: inputData } }
    );
  } catch (e) {
    await errorHandler.saveError("deactivateUser", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const destroyUser = async (inputData) => {
  try {
    return opDb.models.admUsuarios.destroy({ where: { id: inputData } });
  } catch (e) {
    await errorHandler.saveError("destroyUser", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getUsers = async () => {
  try {
    return opDb.models.admUsuarios.findAndCountAll({
      where: { status: { [Sequelize.Op.not]: 0 } },
    });
  } catch (e) {
    await errorHandler.saveError("getUsers", "", e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getUserDetail = async (inputData) => {
  try {
    return opDb.models.admUsuarios.findByPk(parseInt(inputData));
  } catch (e) {
    await errorHandler.saveError("getUserDetail", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

module.exports = {
  addUser,
  updateUser,
  deactivateUser,
  destroyUser,
  getUsers,
  getUserDetail,
};
