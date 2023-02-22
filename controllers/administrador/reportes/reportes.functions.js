const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const Sequelize = require("sequelize");

const getOperadores = async (parametros) => {
  try {
    if (parametros?.fechaInicial && parametros?.fechaFinal) {
      return await opDb.models.operador.findAndCountAll({
        where: {
          fechaRegistro: {
            [Sequelize.Op.between]: [
              parametros.fechaInicial,
              parametros.fechaFinal,
            ],
          },
        },
        limit: parseInt(parametros.limit),
        offset: parseInt(parametros.offset),
      });
    } else {
      return await opDb.models.operador.findAndCountAll({
        limit: parseInt(parametros.limit),
        offset: parseInt(parametros.offset),
      });
    }
  } catch (e) {
    await errorHandler.saveError("getOperadores", parametros, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getOperadoresEstadistica = async (parametros) => {
  try {
    let stats = {};
    if (parametros?.fechaInicial && parametros?.fechaFinal) {
      stats.totalOperadores = await opDb.models.operador.count({
        where: {
          fechaRegistro: {
            [Sequelize.Op.between]: [
              parametros.fechaInicial,
              parametros.fechaFinal,
            ],
          },
        },
      });
      stats.totalOperadoresConEmail = await opDb.models.operador.count({
        where: {
          fechaRegistro: {
            [Sequelize.Op.between]: [
              parametros.fechaInicial,
              parametros.fechaFinal,
            ],
          },
          [Sequelize.Op.or]: [
            {
              emailOperador: {
                [Sequelize.Op.ne]: "",
              },
            },
          ],
        },
      });
      stats.totalOperadoresSinEmail = await opDb.models.operador.count({
        where: {
          fechaRegistro: {
            [Sequelize.Op.between]: [
              parametros.fechaInicial,
              parametros.fechaFinal,
            ],
          },
          [Sequelize.Op.or]: [
            {
              emailOperador: {
                [Sequelize.Op.eq]: "",
              },
            },
          ],
        },
      });
      return stats;
    } else {
      stats.totalOperadores = await opDb.models.operador.count();
      stats.totalOperadoresConEmail = await opDb.models.operador.count({
        where: {
          [Sequelize.Op.or]: [
            {
              emailOperador: {
                [Sequelize.Op.ne]: "",
              },
            },
          ],
        },
      });
      stats.totalOperadoresSinEmail = await opDb.models.operador.count({
        where: {
          [Sequelize.Op.or]: [
            {
              emailOperador: {
                [Sequelize.Op.eq]: "",
              },
            },
          ],
        },
      });
      return stats;
    }
  } catch (e) {
    await errorHandler.saveError("getOperadoresEstadistica", parametros, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getOperadorDetalle = async (idOperador) => {
  try {
    return opDb.models.operador.findOne({
      attributes: ["nombreOperador", "aptoMedico", "celularOperador", "emailOperador", "fechaRegistro", "observaciones", "expAptoMedico"],
      where: { id: idOperador },
      include: [
        {
          attributes: ["id","nombreEdad"],
          model: opDb.models.edadOperador,
          as: "edadOperador",
          required: false,
        },
        {
          attributes: ["id","nombreEstado"],
          model: opDb.models.estado,
          as: "estadoOperador",
          required: false
        },
        {
          attributes: ["idciudad","nombreCiudad"],
          model: opDb.models.ciudad,
          as: "ciudadOperador",
          required: false
        },
        {
          attributes: ["id","nombreExperienciaOperador"],
          model: opDb.models.experienciaOperador,
          as: "experienciaOperador",
          required: false
        },
        {
          attributes: ["id","formaPago"],
          model: opDb.models.formaPago,
          as: "formaPagoOperador",
          required: false
        },
        {
          attributes: ["id","nombreTipoServicio"],
          model: opDb.models.tipoServicio,
          as: "tipoServicioOperador",
          required: false
        },
        {
          attributes: ["id","nombreTipoUnidad"],
          model: opDb.models.tipoUnidad,
          as: "tipoUnidadOperador",
          required: false,
        }
      ],
    });
  } catch (e) {
    await errorHandler.saveError("getOperadorDetalle", idOperador, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

module.exports = {
  getOperadores,
  getOperadoresEstadistica,
  getOperadorDetalle,
};
