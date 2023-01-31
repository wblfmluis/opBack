const reportesAdminRoutes = require("../../../controllers/administrador/reportes/reportes.controller");
const operadoresAdminRoutes = require("../../../controllers/administrador/operadores/operadores.controller");
const router = require("express").Router();

router.route("/getOperadores/?").get(reportesAdminRoutes.getOperadores);
router.route("/getOperadoresStats/?").get(reportesAdminRoutes.getOpStats);
router
  .route("/getOperadorDetalle/:id")
  .get(reportesAdminRoutes.getOperadorDetalle);

router.route("/addNotaOperador/:id").put(operadoresAdminRoutes.addNotaOperador);
router
  .route("/getNotaOperador/:id")
  .get(operadoresAdminRoutes.getNotasOperador);

router.route("/buscadorOperador/?").get(operadoresAdminRoutes.busquedaOperador);

module.exports = router;
