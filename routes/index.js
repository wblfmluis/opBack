/* Route Files */
const urlApi = require("../config/routes/urlbase");
const cuestionarioRoutes = require("./cuestionario/cuestionario.routes");
const authAdminRoutes = require("./administrador/auth/auth.routes");
const filterAdminRoutes = require("./administrador/filtrado/filtrado.routes");
const catalogosRoutes = require("./catalogosGenerales/catalogos.routes");
const adminUserRoutes = require("./administrador/usuarios/usuarios.routes");
const permisosRoutes = require("./permisos/permisos.routes");
const empresaRoutes = require("./empresa/empresa.routes");
const adminReportesRoutes = require("./administrador/operadores/operadores.routes");
/* Route Files */

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express || Operadores.com" });
});

router.use(`${urlApi.api_url_base}/interview`, cuestionarioRoutes);
router.use(`${urlApi.api_url_base}/admin`, authAdminRoutes);
router.use(`${urlApi.api_url_base}/admin/actions`, filterAdminRoutes);
router.use(`${urlApi.api_url_base}/generales`, catalogosRoutes);
router.use(`${urlApi.api_url_base}/admin/users`, adminUserRoutes);
router.use(`${urlApi.api_url_base}/admin/permisos`, permisosRoutes);
router.use(`${urlApi.api_url_base}/empresa`, empresaRoutes);
router.use(`${urlApi.api_url_base}/admin/operadores`, adminReportesRoutes);

module.exports = router;
