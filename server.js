<<<<<<< HEAD
require('dotenv').config({ debug: process.env.DEBUG });

=======
// server.js
require('dotenv').config({ debug: process.env.DEBUG});
>>>>>>> 8367ce8 (mise à jour)
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

<<<<<<< HEAD
server.listen(port, () => {

    console.log('🚀 Serveur en écoute sur le port' + port);

=======
server.listen(PORT, () => {
    console.log(' Serveur en écoute sur le port' + PORT);
>>>>>>> 8367ce8 (mise à jour)
});
