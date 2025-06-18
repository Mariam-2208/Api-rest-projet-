const express = require('express');
const router = express.Router();
const ordreController = require('../Controllers/ordre.controller');

router.get('/', ordreController.getAllOrdres);
// Cette ligne permet à GET et POST d'utiliser la même fonction createOrdre
router.all('/create', ordreController.createOrdre);


// Route POST classique
router.post('/', ordreController.createOrdre);
// Route POST avec /create
router.post('/create', ordreController.createOrdre);
router.get('/:id', ordreController.getOrdreById);
router.delete('/:id', ordreController.deleteOrdre);

module.exports = router;
