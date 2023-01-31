const operadoresFunctions = require("./operadores.functions");
const reportesFunctions = require("../reportes/reportes.functions");

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
