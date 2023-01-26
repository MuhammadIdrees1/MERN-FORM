const router = require("express").Router()
const userController = require("../controller/userController");

router.post("/" ,userController.user_create);
router.get("/", userController.user_all);

module.exports = router;