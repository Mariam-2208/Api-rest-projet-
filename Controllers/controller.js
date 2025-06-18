const Country = require('../Modeles/Country');
exports.create = async (req, res) => {
  try {
    const country = new Country(req.body);
    await country.save();
    res.status(201).json(country);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAll = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) return res.status(404).json({ message: 'Pays non trouvé' });
    res.json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    await Country.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pays supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
