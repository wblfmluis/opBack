const userFunctions = require("./usuarios.functions");

exports.addUser = async (req, res) => {
  let result = await userFunctions.addUser(req.body);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.updateUser = async (req, res) => {
  let result = await userFunctions.updateUser(req.body, req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.deactivateUser = async (req, res) => {
  let result = await userFunctions.deactivateUser(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.destroyUser = async (req, res) => {
  let result = await userFunctions.destroyUser(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.getUsers = async (req, res) => {
  let result = await userFunctions.getUsers();
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.getUserDetail = async (req, res) => {
  let result = await userFunctions.getUserDetail(req.params.id);
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};
