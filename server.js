require('dotenv').config({ debug: process.env.DEBUG });

const http = require('http');

const app = require('./app');


app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

    next();

});



const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(' Serveur en écoute sur le port' + PORT);
});
