// server.js

const http = require('http');

const app = require('./app');
<<<<<<< HEAD



app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

    next();

});

const PORT = process.env.PORT || 5000;
=======
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API 🚀');
  });
const port = process.env.PORT || 4000;
>>>>>>> 29d60a9e2e62268467f780de772f7ab258524d7c

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`🚀 Serveur en écoute sur le port ${port}`);
});
