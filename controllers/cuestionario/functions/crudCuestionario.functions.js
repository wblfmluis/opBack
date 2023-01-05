const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const { QueryTypes, Sequelize } = require("sequelize");

const createPregunta = async (pregunta) => {
  try {
    return await opDb.models.preguntasCuestionario.create(pregunta);
  } catch (e) {
    await errorHandler.saveError("createPregunta", pregunta, e);
    return {
      result: false,
      error: e,
    };
  }
};

const updatePregunta = async (idpregunta, pregunta) => {
  try {
    return await opDb.models.preguntasCuestionario.update(pregunta, {
      where: { id: idpregunta },
    });
  } catch (e) {
    await errorHandler.saveError("updatePregunta", pregunta, e);
    return {
      result: false,
      error: e,
    };
  }
};

const disablePregunta = async (idpregunta) => {
  try {
    return await opDb.models.preguntasCuestionario.update(
      { status: 0 },
      { where: { id: idpregunta } }
    );
  } catch (e) {
    await errorHandler.saveError("disablePregunta", idpregunta, e);
    return {
      result: false,
      error: e,
    };
  }
};

const getCuestionario = async () => {
  try {
    let preguntas = await opDb.models.preguntasCuestionario.findAll({
      attributes: ["id", "pregunta", "tipoRespuesta", "modeloTabla"],
      where: { status: 1 },
    });
    for (let p of preguntas) {
      p.dataValues.respuestas = await opDb.sequelize.query(
        `SELECT * FROM ${p.modeloTabla}`,
        {
          type: QueryTypes.SELECT,
        }
      );
    }
    return preguntas;
  } catch (e) {
    await errorHandler.saveError("getCuestionario", "GET, SELECT", e);
    return {
      result: false,
      error: e,
    };
  }
};

module.exports = {
  createPregunta,
  updatePregunta,
  disablePregunta,
  getCuestionario,
};
