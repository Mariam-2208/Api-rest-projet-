const express = require('express');
const router = express.Router();

const productController = require('../controllers/advice');

router.post('/create', productController.create);
<<<<<<< HEAD
router.delete('/:id', productController.delete);
//router.patch('/:id/edit', productController.patch);
=======
/*router.delete('/:id', productController.delete);
router.patch('/:id/edit', productController.patch);*/
>>>>>>> 982ce268eecf9b030deaf0d352ea5dd038cb0162

module.exports = router;