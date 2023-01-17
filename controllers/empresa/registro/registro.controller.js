const registroFunctions = require("./registro.functions");

exports.addEmpresa = async (req, res) => {
  let result = await registroFunctions.addEmpresa(req.body);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.updateEmpresa = async (req, res) => {
  let result = await registroFunctions.addEmpresa(req.body, req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(JSON.stringify(result));
};

exports.deactivateEmpresa = async (req, res) => {
  let result = await registroFunctions.deactivateEmpresa(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(JSON.stringify(result));
};

exports.getEmpresas = async (req, res) => {
  let result = await registroFunctions.getEmpresas();
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};

exports.getEmpresaDetail = async (req, res) => {
  let result = await registroFunctions.getEmpresaDetail(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.send(result);
};
