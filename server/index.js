require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const shopRoutes = require('./routes/shopRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB', error));

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/cart', cartRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
