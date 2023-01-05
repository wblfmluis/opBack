const filtradoOperador = require("../../genFunctions/filtrado.functions");

exports.filtrarOperador = async (req, res) => {
  let result = await filtradoOperador.filtradoOperador(req.body);
  return res.status(200).send(result);
};
