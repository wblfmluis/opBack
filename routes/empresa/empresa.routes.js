const registroController = require("../../controllers/empresa/registro/registro.controller");
const router = require("express").Router();

router.route("/addEmpresa").post(registroController.addEmpresa);
router.route("/updateEmpresa/:id").put(registroController.updateEmpresa);
router
  .route("/deactivateEmpresa/:id")
  .put(registroController.deactivateEmpresa);
router.route("/getEmpresas").get(registroController.getEmpresas);
router.route("/getEmpresaDetail/:id").get(registroController.getEmpresaDetail);

module.exports = router;
