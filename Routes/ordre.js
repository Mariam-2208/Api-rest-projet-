const express = require('express');
const router = express.Router();
const ordreController = require('../Controllers/ordre.controller');

router.get('/', ordreController.getAllOrdres);
router.post('/create', ordreController.createOrdre);
router.get('/:id', ordreController.getOrdreById);
router.delete('/:id', ordreController.deleteOrdre);

module.exports = router;
