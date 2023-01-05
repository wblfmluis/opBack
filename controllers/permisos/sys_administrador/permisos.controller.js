const permissionFunctions = require("./permisos.functions");

exports.newView = async (req, res) => {
  let result = await permissionFunctions.newView(req.body);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.editView = async (req, res) => {
  let result = await permissionFunctions.editView(req.body, req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.deactivateView = async (req, res) => {
  let result = await permissionFunctions.deactivateView(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.getViews = async (req, res) => {
  let result = await permissionFunctions.getViews();
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.getViewDetail = async (req, res) => {
  let result = await permissionFunctions.getViewDetail(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.newFunction = async (req, res) => {
  let result = await permissionFunctions.newFunction(req.body);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.getFunctionDetail = async (req, res) => {
  let result = await permissionFunctions.getFunctionDetail(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.editFunction = async (req, res) => {
  let result = await permissionFunctions.editFunction(req.body, req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.deactivateFunction = async (req, res) => {
  let result = await permissionFunctions.deactivateFunction(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};
