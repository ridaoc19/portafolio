const express = require('express');
const router = express.Router();

// RUTAS
router.use('/count', require('./src/modules/count/controller.js'));

module.exports = router;


