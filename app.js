const express = require('express');
const mongoose = require('mongoose');



// Connexion à MongoDB (adapte le nom de la base si besoin)
mongoose.connect('mongodb://localhost:27017/testOrdre', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err));
 //CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method.toUpperCase() === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json();
    }
    next();
});

// Setup routes
const routes = require('./Routes')(app);

// Routes Error handling
app.use((req, res, next) => {
    const error = new Error('Not found.');
    error.status = 404;
    next(error);
});
// Application Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: err.message,
        route: req.url
    });
});

app.use((req, res, next) => {

    res.status(200).json({ message: 'Hello world !!' });

});

module.exports = app;


