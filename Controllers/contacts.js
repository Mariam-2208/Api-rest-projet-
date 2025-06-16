const Contact = require('../Modeles/contact');

exports.create = (req, res, next) => {
   
    const contact = new Contact({
        nom: req.body.nom,
        telephone: req.body.telephone,
        mail: req.body.mail,
        description: req.body.description

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
                message: "Success",
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
        prenom: req.body.prenom,
        telephone: req.body.telephone,
    }, {new: true}, function (err, data) {
        if (err) {
            res.send({state: "erreur update article"})
        }
        res.send(data);
    })
}