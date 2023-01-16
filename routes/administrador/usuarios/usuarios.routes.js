const usersController = require("../../../controllers/administrador/usuarios/usuarios.controller");
const router = require("express").Router();

router.route("/addUser").post(usersController.addUser);
router.route("/updateUser/:id").put(usersController.updateUser);
router.route("/deactivateUser/:id").put(usersController.deactivateUser);
router.route("/destroyUser/:id").delete(usersController.destroyUser);
router.route("/getUsers").get(usersController.getUsers);
router.route("/getUserDetail/:id").get(usersController.getUserDetail);

module.exports = router;
