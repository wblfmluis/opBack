const catalogosController = require("../../controllers/catalogosGenerales/catalogos.controller");
const router = require("express").Router();

router.route("/getEstados").get(catalogosController.getAllEstados);
router.route("/getCiudades/:idestado").get(catalogosController.getAllCiudades);

module.exports = router;
