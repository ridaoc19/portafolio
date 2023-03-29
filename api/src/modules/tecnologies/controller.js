const { Router } = require("express");
const services = require("./services");
const { postTecnologies, getTecnologies, putTecnologies } = services;

const router = Router();

router.post("/", postTecnologies);
router.get("/", getTecnologies);
router.put("/", putTecnologies);

module.exports = router;
