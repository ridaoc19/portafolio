const { Router } = require("express");
const { postUniversity, getuniversity, deletUniversity } = require("./services-university");
const { postTitle, deletTitle } = require("./services-title");

const router = Router();

router.post("/university", postUniversity);
router.get("/university/:id", getuniversity);
router.delete("/university/:id", deletUniversity)

router.post("/title/:user_id", postTitle);
router.delete("/title/:id/:user_id", deletTitle)


module.exports = router;
