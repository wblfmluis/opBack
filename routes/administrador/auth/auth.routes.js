const authController = require("../../../controllers/administrador/auth/auth.controller");
const router = require("express").Router();

router.route("/login").post(authController.login);
router.route("/recoverPassword").post(authController.recoverPassword);

module.exports = router;
