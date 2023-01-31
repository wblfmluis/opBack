const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const Sequelize = require("sequelize");

const addNotasOperador = async (inputData, idOperador) => {
  try {
    return await opDb.models.operador.update(inputData, {
      where: {
        id: idOperador,
      },
    });
  } catch (e) {
    await errorHandler.saveError("addNotasOperador", idOperador, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};
const getNotasOperador = async (idOperador) => {
  try {
    return await opDb.models.operador.findOne({
      attributes: ["observaciones"],
      where: {
        id: idOperador,
      },
    });
  } catch (e) {
    await errorHandler.saveError("getNotasOperador", idOperador, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const buscadorOperador = async (parametro) => {
  try {
    return await opDb.models.operador.findAll({
      attributes: ["nombreOperador", "fechaRegistro", "celularOperador"],
      where: {
        [Sequelize.Op.or]: [
          {
            nombreOperador: {
              [Sequelize.Op.startsWith]: parametro,
            },
          },
          {
            nombreOperador: {
              [Sequelize.Op.endsWith]: parametro,
            },
          },
          {
            nombreOperador: {
              [Sequelize.Op.substring]: parametro,
            },
          },
          {
            celularOperador: {
              [Sequelize.Op.startsWith]: parametro,
            },
          },
          {
            celularOperador: {
              [Sequelize.Op.endsWith]: parametro,
            },
          },
          {
            celularOperador: {
              [Sequelize.Op.substring]: parametro,
            },
          },
        ],
      },
    });
  } catch (e) {
    await errorHandler.saveError("buscadorOperador", parametro, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

module.exports = {
  addNotasOperador,
  getNotasOperador,
  buscadorOperador,
};
