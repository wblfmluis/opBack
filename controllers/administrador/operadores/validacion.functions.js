const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const Sequelize = require("sequelize");
const commonFunctions = require("../common.functions");

const iniciarValidacion = async (token) => {
  try {
    let identity = await commonFunctions.decodeToken(token);
    if (identity) {
      let starDay = new Date();
      starDay.setHours(0, 0, 0, 0);
      let endDay = new Date();
      endDay.setHours(23, 59, 59, 999);
      let validarSesion = await opDb.models.sesionValidacion.findOne({
        where: {
          fechaInicio: {
            [Sequelize.Op.between]: [starDay, endDay],
          },
        },
      });
      if (validarSesion !== null) {
        return {
          result: false,
          code: "409",
          message: "Ya existe una sesión de validación en curso",
        };
      }
      console.log(validarSesion);
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
