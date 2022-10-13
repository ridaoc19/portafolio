const express = require('express');
const router = express.Router();
const { postCounter,  } = require("./services.js");

router.post("/", postCounter )

module.exports = router;


