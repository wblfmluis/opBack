const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

const addEmpresa = async (inputData) => {
  try {
    //
    const empresa = await opDb.models.empresa.findOne({
      where: { emailEmpresa: inputData.emailEmpresa },
    });
    if (empresa !== null) {
      return {
        result: false,
        code: "400",
        message: "Ya existe una cuenta con email indicado",
      };
    }
    //
    let password = inputData.passwordEmpresa;
    inputData.passwordEmpresa = bcrypt.hashSync(password, 8);
    inputData.fechaRegistro = Date.now();
    return await opDb.models.empresa.create(inputData);
  } catch (e) {
    await errorHandler.saveError("addEmpresa", inputData, e);
    return {
      result: false,
      code: "500",
      message: e.message.toString(),
    };
  }
};

const updateEmpresa = async (inputData, idempresa) => {
  try {
    if (inputData.password) {
      let password = inputData.password;
      inputData.password = bcrypt.hashSync(password, 8);
    }
    return await opDb.models.empresa.update(inputData, {
      where: {
        id: idempresa,
      },
    });
  } catch (e) {
    inputData.whereClause = { id: idempresa };
    await errorHandler.saveError("updateEmpresa", inputData, e);
    return {
      result: false,
      code: "500",
      message: e.message.toString(),
    };
  }
};

const deactivateEmpresa = async (inputData) => {
  try {
    return opDb.models.empresa.update(
      { status: 0 },
      { where: { id: inputData } }
    );
  } catch (e) {
    await errorHandler.saveError("deactivateEmpresa", inputData, e);
    return {
      result: false,
      code: "500",
      message: e.message.toString(),
    };
  }
};

const getEmpresas = async () => {
  try {
    return opDb.models.empresa.findAndCountAll({
      where: { status: { [Sequelize.Op.not]: 0 } },
    });
  } catch (e) {
    await errorHandler.saveError("getEmpresas", "", e);
    return {
      result: false,
      code: "500",
      message: e.message.toString(),
    };
  }
};

const getEmpresaDetail = async (inputData) => {
  try {
    return opDb.models.empresa.findByPk(parseInt(inputData));
  } catch (e) {
    await errorHandler.saveError("getEmpresaDetail", inputData, e);
    return {
      result: false,
      code: "500",
      message: e.message.toString(),
    };
  }
};

module.exports = {
  addEmpresa,
  updateEmpresa,
  deactivateEmpresa,
  getEmpresas,
  getEmpresaDetail,
};
