const cuestionarioController = require("../../controllers/cuestionario/cuestionario.controller");
const router = require("express").Router();

router.route("/nuevaPregunta").post(cuestionarioController.nuevaPregunta);
router
  .route("/actualizarPregunta/:idpregunta")
  .put(cuestionarioController.actualizarPregunta);
router
  .route("/desactivarPregunta/:idpregunta")
  .put(cuestionarioController.desactivarPregunta);
router
  .route("/obtenerCuestionario")
  .get(cuestionarioController.obtenerCuestionario);

module.exports = router;
