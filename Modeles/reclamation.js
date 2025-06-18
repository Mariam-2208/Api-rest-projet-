const mongoose = require('mongoose');

const ReclamationSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  statut: { type: String, default: 'en attente' }
});

module.exports = mongoose.model('Reclamation', ReclamationSchema);
