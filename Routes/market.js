const express = require('express');
const router = express.Router();
const marketController = require('../Controllers/market');


router.post('/create', marketController.create);

module.exports = router;