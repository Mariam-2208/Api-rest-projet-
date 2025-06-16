const express = require('express');
const router = express.Router();
const marketController = require('../Controllers/market');

router.get('/', marketController.getAllMarkets);
router.post('/', marketController.createMarket);

module.exports = router;