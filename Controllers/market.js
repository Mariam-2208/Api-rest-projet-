const Market = require('../Modeles/market');




exports.create = (req, res, next) => {
   
     const market = new Market({
            name: req.body.name,
            location: req.body.location,
           
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
    Article.findByIdAndDelete({ _id: req.params.id })
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

    market.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
       
location:  req.body.location ,
createdAt: req.body.createdAt,
        //displayPhoneNumber: req.body.displayPhoneNumber,
        //displayEmail: req.body.displayEmail,
        //picture: req.body.picture,
        // user: req.body.user,
        //published: req.body.published,
        //available: req.body.available,
    }, {new: true}, function (err, data) {
        if (err) {
            res.send({state: "erreur update market"})
        }
        res.send(data);
    })
}