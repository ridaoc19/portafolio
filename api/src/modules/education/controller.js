const { Router } = require("express");
const { postUniversity, getuniversity, deletUniversity } = require("./services-university");
const { postTitle, getTitle, deletTitle } = require("./services-title");

const router = Router();

router.post("/university", postUniversity);
router.get("/university/:id", getuniversity);
router.delete("/university/:id", deletUniversity)

router.post("/title", postTitle);
router.get("/title/:id", getTitle);
router.delete("/title/:id", deletTitle)


module.exports = router;
