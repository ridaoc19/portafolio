const { Router } = require("express");
const { postLogin, getLogin } = require("./services");

const router = Router();

router.post("/", postLogin);
router.get("/:id", getLogin);

module.exports = router;
