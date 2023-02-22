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

const getCatalogosOperadores = async (catalogo) => {
  try {
    let result;
    switch (catalogo) {
      case "edad":
        result = await opDb.models.edadOperador.findAll({
          where: { status: 1 },
        });
        break;
      case "experiencia":
        result = await opDb.models.experienciaOperador.findAll({
          where: { status: 1 },
        });
        break;
      case "pago":
        result = await opDb.models.formaPago.findAll({
          where: { status: 1 },
        });
        break;
      case "serivicio":
        result = await opDb.models.tipoServicio.findAll({
          where: { status: 1 },
        });
        break;
      case "unidad":
        result = await opDb.models.tipoUnidad.findAll({
          where: { status: 1 },
        });
        break;
    }
    return result;
  } catch (e) {
    await errorHandler.saveError("getCatalogosOperadores", catalogo, e);
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
  getCatalogosOperadores,
};
