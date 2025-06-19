// controllers.js

// Simule une base de données en mémoire
const utilisateurs = [];

/**
 * Crée un nouvel utilisateur
 */
function creerUtilisateur(req, res) {
    const { nom, email } = req.body;

    if (!nom || !email) {
        return res.status(400).json({ message: "Le nom et l'email sont requis." });
    }

    const nouvelUtilisateur = {
        id: utilisateurs.length + 1,
        nom,
        email,
        inscritLe: new Date()
    };

    utilisateurs.push(nouvelUtilisateur);
    res.status(201).json(nouvelUtilisateur);
}

/**
 * Liste tous les utilisateurs
 */
function listerUtilisateurs(req, res) {
    res.status(200).json(utilisateurs);
}

/**
 * Supprime un utilisateur par ID
 */
function supprimerUtilisateur(req, res) {
    const id = parseInt(req.params.id);
    const index = utilisateurs.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    utilisateurs.splice(index, 1);
    res.status(200).json({ message: `Utilisateur avec ID ${id} supprimé.` });
}

// Export des fonctions pour les utiliser ailleurs
module.exports = {
    creerUtilisateur,
    listerUtilisateurs,
    supprimerUtilisateur
};
