const express = require('express');
const router = express.Router();
const { postCounter, getCounter,  } = require("./services.js");

router.post("/", postCounter )
router.get("/:ip", getCounter )

module.exports = router;


