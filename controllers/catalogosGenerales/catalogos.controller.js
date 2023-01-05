const catalogosFunctions = require("./catalogos.functions");

exports.getAllEstados = async (req, res) => {
  let result = await catalogosFunctions.getEstados();
  if (result.result === false) {
    return res.status(result.code).send(result.message);
  }
  return res.status(200).send(result);
};

exports.getAllCiudades = async (req, res) => {
  let idestado = parseInt(req.params.idestado);
  if (idestado === 0 || isNaN(idestado)) {
    return res.status(400).send({
      message:
        "Error de estado del cliente, es necesario indicar parametro idestado",
    });
  } else {
    let result = await catalogosFunctions.getCiudades(req.params.idestado);
    if (result.result === false) {
      return res.status(result.code).send(result.message);
    }
    return res.status(200).send(result);
  }
};
