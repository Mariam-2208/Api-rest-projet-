require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connexion à la base de données MongoDB
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    .then(() => console.log("✅ Connecté à la base de données"))
    .catch((err) => console.log("❌ Échec de connexion à la base de données :", err));

// Middleware
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb', parameterLimit: 50000 }));

// Gestion CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

// Routes
const countryRoutes = require('./Routes/countryroutes');
app.use('/api/countries', countryRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    const error = new Error('Route non trouvée');
    error.status = 404;
    next(error);
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message,
        route: req.url
    });
});

module.exports = app;
