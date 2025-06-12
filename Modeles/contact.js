const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

 

const contactSchema = mongoose.Schema({

    nom: { type: String, required: true },

    prenom: { type: String },

    telephone: { type: String },


});

 

contactSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Contact', contactSchema);