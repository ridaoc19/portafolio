const { Router } = require("express");
const { postCompany, getCompany, putCompany, deletCompany } = require("./services-company");
const { postTechnologies, getTechnologies } = require('./services-technologies');
const { postWorks, getWorks } = require('./services-works');
const { postPosition, deletePosition } = require("./services-positions");
const { postFunctions, getFunctions, deleteFunctions } = require("./services-functions");

const router = Router();


router.post("/company", postCompany);
router.get("/company", getCompany);
router.delete("/company/:id", deletCompany)

router.post("/positions", postPosition);
router.delete("/positions/:id", deletePosition);

router.post("/functions/:id", postFunctions);
router.get("/functions/:id", getFunctions);
router.delete("/functions/:id", deleteFunctions)




router.post("/technologies", postTechnologies);
router.get("/technologies", getTechnologies);

router.post("/", postWorks);
router.get("/:id", getWorks);
router.put("/:id", putCompany);

module.exports = router;
