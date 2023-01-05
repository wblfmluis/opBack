const cuestionarioFunctions = require("./functions/crudCuestionario.functions");

exports.nuevaPregunta = async (req, res) => {
  let result = await cuestionarioFunctions.createPregunta(req.body);
  return result.result
    ? res.status(500).send(result)
    : res.status(200).send(result);
};

exports.actualizarPregunta = async (req, res) => {
  let result = await cuestionarioFunctions.updatePregunta(
    req.params.idpregunta,
    req.body
  );
  return result.result
    ? res.status(500).send(result)
    : res.status(200).send(result);
};

exports.desactivarPregunta = async (req, res) => {
  let result = await cuestionarioFunctions.disablePregunta(
    req.params.idpregunta
  );
  return result.result
    ? res.status(500).send(result)
    : res.status(200).send(result);
};

exports.obtenerCuestionario = async (req, res) => {
  let result = await cuestionarioFunctions.getCuestionario();
  return result.result
    ? res.status(500).send(result)
    : res.status(200).send(result);
};
