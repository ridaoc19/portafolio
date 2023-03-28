const { Router } = require("express");
const { readdirSync } = require("fs");
const path = require("path");

const router = Router();

readdirSync(path.join(__dirname, "src/modules")).map((fileName) => {
        router.use(`/${fileName}`, require(`./src/modules/${fileName}/controller`));
});

module.exports = router;
