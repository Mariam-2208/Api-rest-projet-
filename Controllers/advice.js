const Advice = require('../Modeles/advice');
// Créer un nouveau conseil
exports.create = async (req, res) => {
    try {
        const newAdvice = new Advice(req.body);
        await newAdvice.save();
        res.status(201).json(newAdvice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Récupérer tous les conseils
exports.getAllAdvices = async (req, res) => {
    try {
        const advices = await Advice.find();
        res.json(advices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un conseil par son ID
exports.getAdviceById = async (req, res) => {
    try {
        const advice = await Advice.findById(req.params.id);
        if (!advice) {
            return res.status(404).json({ message: 'Conseil non trouvé' });
        }
        res.json(advice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un conseil
exports.delete = async (req, res) => {
    try {
        await Advice.findByIdAndDelete(req.params.id);
        res.json({ message: 'Conseil supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};