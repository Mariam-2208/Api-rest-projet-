const City = require('../Modeles/city');


exports.create = (req, res, next) => {
   
    const city = new City({
        name: req.body.name,
        population: req.body.population,
        codepostale: req.body.codepostale

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
    city.findByIdAndDelete({ _id: req.params.id })
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

    city.findByIdAndUpdate(req.params.id, {
        
    }, {new: true}, function (err, data) {
        if (err) {
            res.send({state: "erreur update article"})
        }
        res.send(data);
    })
}