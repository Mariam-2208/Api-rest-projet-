const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

 

const citySchema = mongoose.Schema({

    name: { type: String, required: true },

    population: { type: Number},

    code_postale: { type: Number },

});

 

citySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('city', citySchema);