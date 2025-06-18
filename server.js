// server.js

const http = require('http');

const app = require('./app');
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API 🚀');
  });
const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`🚀 Serveur en écoute sur le port ${port}`);
});
