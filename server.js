<<<<<<< HEAD
require('dotenv').config({ debug: process.env.DEBUG });

=======
// server.js
require('dotenv').config( { debug: process.env.DEBUG });
>>>>>>> e2752e0 (Sauvegarde avant rebase)
const http = require('http');

const app = require('./app');


app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

    next();

});

<<<<<<< HEAD
=======
const port = process.env.PORT || 5000;
>>>>>>> e2752e0 (Sauvegarde avant rebase)


const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
<<<<<<< HEAD
    console.log(' Serveur en écoute sur le port' + port);
});
=======
    console.log('Serveur en écoute sur le port' + port);
});
>>>>>>> e2752e0 (Sauvegarde avant rebase)
