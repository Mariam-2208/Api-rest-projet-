const express = require('express');
const router = express.Router();

const productController = require('../Controllers/contacts');

router.post('/create', productController.create);
router.delete('/:id', productController.delete);
router.patch('/:id/edit', productController.patch);

module.exports = router;
