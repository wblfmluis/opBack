const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const Sequelize = require("sequelize");
const commonFunctions = require("../common.functions");

const iniciarValidacion = async (token) => {
  try {
    let identity = commonFunctions.decodeToken(token);
    if (identity) {
      return await opDb.models.sesionValidacion.create({
        idusuario: identity.idUsuario,
        fechaInicio: Date.now(),
      });
    }
  } catch (e) {
    await errorHandler.saveError("iniciarValidacion", token, e);
    return {
      result: false,
      code: "500",
      message: e,
    };
  }
};

const finalizarValidacion = async (idsesion) => {
  try {
    return await opDb.models.sesionValidacion.update(
      { fechaFin: Date.now() },
      { where: { id: idsesion } }
    );
  } catch (e) {
    await errorHandler.saveError("finalizarValidacion", idsesion, e);
    return {
      result: false,
      code: "500",
      message: e,
    };
  }
};

module.exports = {
  iniciarValidacion,
  finalizarValidacion,
};
