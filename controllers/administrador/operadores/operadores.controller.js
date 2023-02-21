const operadoresFunctions = require("./operadores.functions");
const reportesFunctions = require("../reportes/reportes.functions");
const validacionFunctions = require("./validacion.functions");

exports.addNotaOperador = async (req, res) => {
  let result = await operadoresFunctions.addNotasOperador(
    req.body,
    req.params.id
  );
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.getNotasOperador = async (req, res) => {
  let result = await operadoresFunctions.getNotasOperador(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.busquedaOperador = async (req, res) => {
  let result = await operadoresFunctions.buscadorOperador(req.query.parametro);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.inicialValidacion = async (req, res) => {
  let result = await validacionFunctions.iniciarValidacion(
    req.header("access-token")
  );
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.finalizarValidacion = async (req, res) => {
  let result = await validacionFunctions.finalizarValidacion(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send("200", JSON.stringify(result));
};
