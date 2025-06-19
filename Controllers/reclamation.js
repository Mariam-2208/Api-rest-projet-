const Reclamation = require('../Modeles/reclamation')

// Créer une nouvelle réclamation
exports.creerReclamation = async (req, res) => {
  try {
    const reclamation = new Reclamation(req.body);
    await reclamation.save();
    res.status(201).json(reclamation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer toutes les réclamations
exports.getReclamations = async (req, res) => {
  try {
    const reclamations = await Reclamation.find();
    res.json(reclamations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Récupérer une seule réclamation
exports.getReclamationById = async (req, res) => {
  try {
    const reclamation = await Reclamation.findById(req.params.id);
    if (!reclamation) return res.status(404).json({ message: 'Réclamation non trouvée' });
    res.json(reclamation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supprimer une réclamation
exports.supprimerReclamation = async (req, res) => {
  try {
    await Reclamation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Réclamation supprimée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
