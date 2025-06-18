// Modeles/ordre.model.js
const mongoose = require('mongoose');

const ordreSchema = new mongoose.Schema({
  produits: [
    {
      nom: { type: String, required: true },
      quantite: { type: Number, required: true },
      prixUnitaire: { type: Number, required: true }
    }
  ],
  client: { type: String, required: true },
  statut: { type: String, default: 'en attente' },
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ordre', ordreSchema);
