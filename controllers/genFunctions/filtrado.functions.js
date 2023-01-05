const opDb = require("../../models/operadoresDB");
const sequelize = require("sequelize");

// Filtrado de operadores Version 1.0
const filtradoOperador = async (parametros) => {
  let whereObj = {};

  if (parametros.edad) {
    whereObj.idedadOperador = parametros.edad;
  }
  if (parametros.experiencia) {
    whereObj.idexperienciaOperador = parametros.experiencia;
  }
  if (parametros.estado) {
    whereObj.idestado = parametros.estado;
  }
  if (parametros.municipio) {
    whereObj.idmunicipio = parametros.municipio;
  }

  return await opDb.models.operador.findAndCountAll({
    where: whereObj,
    include: [
      {
        model: opDb.models.tipoLicenciaOperador,
        as: "tipoLicencia_Operadors",
        required: false,
        separate: true,
        include: [
          {
            model: opDb.models.tipoLicencia,
            as: "idtipoLicencia_tipoLicencium",
            required: false,
          },
        ],
      },
    ],
  });
};

module.exports = {
  filtradoOperador,
};
