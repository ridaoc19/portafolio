const { Router } = require("express");
const services = require("./services");
const { postWorks, getWorks, putWorks } = services;

const router = Router();

router.post("/", postWorks);
router.get("/", getWorks);
router.put("/", putWorks);

module.exports = router;
