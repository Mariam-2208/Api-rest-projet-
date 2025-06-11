const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

 

const articleSchema = mongoose.Schema({

    title: { type: String, required: true },

    description: { type: String, default: 'Pas disponible.' },

    price: { type: String, default: 0 },

    created_at: { type: Date, default: Date.now },

    updated_at: { type: Date, default: Date.now }

});

 

articleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Article', articleSchema);