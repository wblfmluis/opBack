const filtradoAdminController = require("../../../controllers/administrador/filtrado/filtrado.controller");
const router = require("express").Router();

router.route("/filtrado").post(filtradoAdminController.filtrarOperador);

module.exports = router;
