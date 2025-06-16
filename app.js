const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb', parameterLimit: 50000 }));



mongoose.connect('mongodb://localhost:27017/testOrdre', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err));



    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`).then(() => {
        console.log("connect to database");
    }).catch (() => {
        console.log("connection failed!");
    });


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method.toUpperCase() === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json();
    }
    next();
});

const routes = require('./Routes')(app);

app.use((req, res, next) => {
    const error = new Error('Not found.');
    error.status = 404;
    next(error);
});


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


