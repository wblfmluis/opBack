const opDb = require("../../models/operadoresDB");
const errorHandler = require("../../config/db/dbError.handler");
const Sequelize = require("sequelize");

const getEstados = async () => {
  try {
    return await opDb.models.estado.findAndCountAll({
      where: { status: 1 },
    });
  } catch (e) {
    await errorHandler.saveError("getEstados", "", e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getCiudades = async (estado) => {
  try {
    return await opDb.models.ciudad.findAndCountAll({
      where: { statusCiudad: 1, idestado: estado },
    });
  } catch (e) {
    await errorHandler.saveError("getCiudades", estado, e);
    return {
      result: false,
      code: 500,
      message: e.toString(),
    };
  }
};

module.exports = {
  getEstados,
  getCiudades,
};
