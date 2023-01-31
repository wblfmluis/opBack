const reportesFunctions = require("./reportes.functions");

exports.getOperadores = async (req, res) => {
  let result = await reportesFunctions.getOperadores(req.query);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.getOpStats = async (req, res) => {
  let result = await reportesFunctions.getOperadoresEstadistica(req.query);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.getOperadorDetalle = async (req, res) => {
  let result = await reportesFunctions.getOperadorDetalle(req.params.id);
  if (result?.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};
