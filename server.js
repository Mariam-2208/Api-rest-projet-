const express = require('express');
const mongoose = require('mongoose');
const marketRoutes = require('./routes/marketRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tonProjet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/markets', marketRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));