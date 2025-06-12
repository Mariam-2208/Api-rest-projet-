const express = require('express');
const router = express.Router();
const controller = require('../Controllers/reclamation');

router.post('/', controller.creerReclamation);
router.get('/', controller.getReclamations);
router.get('/:id', controller.getReclamationById);
router.delete('/:id', controller.supprimerReclamation);

module.exports = router;
