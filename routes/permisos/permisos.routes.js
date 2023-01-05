const permisosAdminController = require("../../controllers/permisos/sys_administrador/permisos.controller");
const router = require("express").Router();

router.route("/addView").post(permisosAdminController.newView);
router.route("/updateView/:id").put(permisosAdminController.editView);
router.route("/deactivateView/:id").put(permisosAdminController.deactivateView);
router.route("/viewDetail/:id").get(permisosAdminController.getViewDetail);
router.route("/getViews").get(permisosAdminController.getViews);

router.route("/addFunction").post(permisosAdminController.newFunction);
router.route("/updateFunction/:id").put(permisosAdminController.editFunction);
router
  .route("/deactivateFunction/:id")
  .post(permisosAdminController.deactivateFunction);
router
  .route("/functionDetail/:id")
  .post(permisosAdminController.getFunctionDetail);

module.exports = router;
