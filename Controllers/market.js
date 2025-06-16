const Market = require('../modeles/Market');

exports.getAllMarkets = async (req, res) => {
  try {
    const markets = await Market.find();
    res.json(markets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMarket = async (req, res) => {
  try {
    const market = new Market(req.body);
    await market.save();
    res.status(201).json(market);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};