const Article = require('../Modeles/article');

exports.create = (req, res, next) => {
   
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price 

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

    Article.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        price: { amount: req.body.price.amount, fixed: req.body.price.fixed },
        currency: req.body.currency,
        region: req.body.region,
        subCategory: req.body.subCategory,
        updated_at: new Date()
        //displayPhoneNumber: req.body.displayPhoneNumber,
        //displayEmail: req.body.displayEmail,
        //picture: req.body.picture,
        // user: req.body.user,
        //published: req.body.published,
        //available: req.body.available,
    }, {new: true}, function (err, data) {
        if (err) {
            res.send({state: "erreur update article"})
        }
        res.send(data);
    })
}