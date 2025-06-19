const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const productController = require('../Controllers/contacts');
=======
const productController = require('.../controllers/contact');
>>>>>>> 8367ce8 (mise à jour)

router.post('/create', productController.create);
router.delete('/:id', productController.delete);
router.patch('/:id/edit', productController.patch);

module.exports = router;