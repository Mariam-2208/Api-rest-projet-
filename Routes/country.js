// Routes/countryroutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Liste des pays (à implémenter)' });
});

module.exports = router;
