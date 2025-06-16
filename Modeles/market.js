const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const MarketSchema = new mongoose.Schema({
name: { type: String, required: true },
location: { type: String },
createdAt: { type: Date, default: Date.now }
});

MarketSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Market', MarketSchema);