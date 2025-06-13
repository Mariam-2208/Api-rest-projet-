const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const adviceSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, default: 'Pas disponible.' },
    author: { type: String, default: 'Anonyme' },
    date: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

adviceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('advice', adviceSchema);