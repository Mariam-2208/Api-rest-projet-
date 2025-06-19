const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

 

const countrySchema = mongoose.Schema({

    nom: { type: String, required: true },

    capital: { type: String, default: 'Pas disponible.' },

    continent: { type: String, default: 0 },


});

 

countrySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Country', countrySchema);
