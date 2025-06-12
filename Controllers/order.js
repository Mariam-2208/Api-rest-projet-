// Controllers/ordre.controller.js
const Ordre = require('../Modeles/ordre.js');

// Obtenir toutes les commandes
exports.getAllOrdres = async (req, res) => {
  try {
    const ordres = await Ordre.find().sort({ date: -1 });
    res.status(200).json(ordres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer une nouvelle commande
exports.createOrdre = async (req, res) => {
  try {
    const { produits, client, statut, total } = req.body;
    const nouvelOrdre = new Ordre({ produits, client, statut, total });
    await nouvelOrdre.save();
    res.status(201).json(nouvelOrdre);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtenir une commande par son ID
exports.getOrdreById = async (req, res) => {
  try {
    const ordre = await Ordre.findById(req.params.id);
    if (!ordre) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.status(200).json(ordre);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une commande
exports.deleteOrdre = async (req, res) => {
  try {
    const result = await Ordre.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.status(200).json({ message: 'Commande supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
