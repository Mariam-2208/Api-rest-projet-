// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user');

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

module.exports = router
