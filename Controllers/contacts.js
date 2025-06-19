const Contact = require('../Modeles/contact');




exports.create = (req, res, next) => {
   
    const contact = new Contact({
        nom: req.body.nom,
        mail: req.body.mail,
        description: req.body.description,
        telephone: req.body.telephone

    }).save()
        .then(data => {
            
            res.status(201).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.delete = (req, res, next) => {
    // TODO delete files
    Contact.findByIdAndDelete({ _id: req.params.id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Contact supprimé avec succès",
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.patch = (req, res, next) => {

    Contact.findByIdAndUpdate(req.params.id, {
        nom: req.body.nom,
        mail: req.body.mail,
        description: req.body.description,
        telephone: req.body.telephone,
         updated_at: new Date()
    }, {new: true}, function (err, data) {
        if (err) {
            res.send({state: "Erreur de mise à jour du contact"})
        }
        res.send(data);
    })
}