const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

 

const usernotificationSchema = mongoose.Schema({

    name: { type: String, required: true },

    mail: { type: String },

    description: { type: String, default: 'Pas disponible.' },

    created_at: { type: Date, default: Date.now },

    updated_at: { type: Date, default: Date.now }

});

 

usernotificationSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Usernotification', usernotificationSchema);
