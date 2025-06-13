

// Créer un nouvel conseil
/*exports.creerConseil = async (req, res) => {
  try {
    const conseil = new advice(req.body);
    await conseil.save();
    res.status(201).json(conseil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer tous les conseils
exports.getConseils = async (req, res) => {
  try {
    const conseils = await advice.find();
    res.json(conseils);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Récupérer un seul conseil par son ID
exports.getConseilById = async (req, res) => {
  try {
    const conseil = await advice.findById(req.params.id);
    if (!conseil) return res.status(404).json({ message: 'Conseil non trouvé' });
    res.json(conseil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supprimer un conseil
exports.supprimerConseil = async (req, res) => {
  try {
    await advice.findByIdAndDelete(req.params.id);
    res.json({ message: 'Conseil supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};*/