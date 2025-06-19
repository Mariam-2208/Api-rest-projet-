const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

 

const contactSchema = mongoose.Schema({

    nom: { type: String, required: true },

    mail: { type: String },

    description: { type: String },

    telephone: { type: String },

    created_at: { type: Date, default: Date.now },

    updated_at: { type: Date, default: Date.now }


});

 

contactSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Contact', contactSchema);