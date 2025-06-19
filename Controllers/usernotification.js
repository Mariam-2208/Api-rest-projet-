const Usernotification = require('../Modeles/usernotification');
usernotification



exports.create = (req, res, next) => {
   
    const usernotification = new Usernotification({
        name: req.body.name,
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
    Usernotification.findByIdAndDelete({ _id: req.params.id })
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

    Usernotification.findByIdAndUpdate(req.params.id, {
       name: req.body.name,
        mail: req.body.mail,
        description: req.body.description, 
        updated_at: new Date()
        //displayPhoneNumber: req.body.displayPhoneNumber,
        //displayEmail: req.body.displayEmail,
        //picture: req.body.picture,
        // user: req.body.user,
        //published: req.body.published,
        //available: req.body.available,
    }, {new: true}, function (err, data) {
        if (err) {
            res.send({state: "erreur update usernotification"})
        }
        res.send(data);
    })

}