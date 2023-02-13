const opDb = require("../../../models/operadoresDB");
const errorHandler = require("../../../config/db/dbError.handler");
const Sequelize = require("sequelize");

const newView = async (inputData) => {
  try {
    return await opDb.models.vistas.create(inputData);
  } catch (e) {
    await errorHandler.saveError("newView", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const editView = async (inputData, id) => {
  try {
    return await opDb.models.vistas.update(inputData, { where: { id: id } });
  } catch (e) {
    inputData.whereClause = { id: id };
    await errorHandler.saveError("editView", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const deactivateView = async (inputData) => {
  try {
    return opDb.models.vistas.update(
      { status: 0 },
      { where: { id: inputData } }
    );
  } catch (e) {
    await errorHandler.saveError("deactivateView", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getViewDetail = async (inputData) => {
  try {
    return opDb.models.vistas.findByPk(parseInt(inputData));
  } catch (e) {
    await errorHandler.saveError("getViewDetail", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getViews = async () => {
  try {
    return opDb.models.vistas.findAndCountAll({
      where: { status: { [Sequelize.Op.not]: 0 } },
      include: [
        {
          model: opDb.models.funciones,
          as: "funciones",
          required: false,
        },
      ],
    });
  } catch (e) {
    await errorHandler.saveError("getViews", "", e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const newFunction = async (inputData) => {
  try {
    return await opDb.models.funciones.create(inputData);
  } catch (e) {
    await errorHandler.saveError("newFunction", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const editFunction = async (inputData, id) => {
  try {
    return await opDb.models.funciones.update(inputData, { where: { id: id } });
  } catch (e) {
    inputData.whereClause = { id: id };
    await errorHandler.saveError("editFunction", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const deactivateFunction = async (inputData) => {
  try {
    return opDb.models.funciones.update(
      { status: 0 },
      { where: { id: inputData } }
    );
  } catch (e) {
    await errorHandler.saveError("deactivateFunction", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const getFunctionDetail = async (inputData) => {
  try {
    return opDb.models.funciones.findByPk(parseInt(inputData));
  } catch (e) {
    await errorHandler.saveError("getFunctionDetail", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const generarEstructuraPermisos = async (idusuario) => {
  try {
    let getPermisos = await opDb.models.funciones.findAll();
    if (getPermisos.length !== 0) {
      await opDb.models.permisoUsuario.destroy({where: {idusuario: idusuario}});
      for (let permiso of getPermisos) {
        await opDb.models.permisoUsuario.create({
          idusuario: idusuario,
          idfuncion: permiso.id
        })
      }
      return await opDb.models.permisoUsuario.findAll({where: {idusuario: idusuario}});
    } else {
      return {
        result: false,
        code: 500,
        message: "No hay permisos disponibles para generar la estructura",
      };
    }
  } catch (e) {
    await errorHandler.saveError("generarEstructuraPermisos", idusuario, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
}

const setUnsetPermiso = async (idpermiso) => {
  try {
    let permisoActual = await opDb.models.permisoUsuario.findByPk(idpermiso);
    if (permisoActual.status === 0) {
      return await opDb.models.permisoUsuario.update({status: 1}, {where: {id: idpermiso}});
    }
    if (permisoActual.status === 1) {
      return await opDb.models.permisoUsuario.update({status: 0}, {where: {id: idpermiso}});
    }
  } catch (e) {
    await errorHandler.saveError("setUnsetPermiso", idpermiso, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
}

module.exports = {
  newView,
  editView,
  getViewDetail,
  getViews,
  newFunction,
  editFunction,
  getFunctionDetail,
  deactivateView,
  deactivateFunction,
  generarEstructuraPermisos,
  setUnsetPermiso
};
