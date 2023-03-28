const { Router } = require("express");
const services = require("./services");
const { postLocation, getLocation } = services;

const router = Router();

router.post("/", postLocation);
router.get("/:id", getLocation);

module.exports = router;
