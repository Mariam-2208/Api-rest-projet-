// modele.js

/**
 * Classe représentant un utilisateur
 */
class Utilisateur {
    constructor(nom, email) {
        this.nom = nom;
        this.email = email;
        this.dateInscription = new Date();
    }

    afficherInfos() {
        return `Nom: ${this.nom} | Email: ${this.email} | Inscrit le: ${this.dateInscription.toLocaleDateString()}`;
    }

    mettreAJourEmail(nouvelEmail) {
        if (this.#validerEmail(nouvelEmail)) {
            this.email = nouvelEmail;
            return true;
        }
        return false;
    }

    #validerEmail(email) {
        // Expression régulière simple pour valider un email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// Exporter le modèle (utile pour Node.js)
if (typeof module !== 'undefined') {
    module.exports = Utilisateur;
}
