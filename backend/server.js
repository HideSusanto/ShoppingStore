const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connection = require('./config/database');
const verifyToken = require('./middleware/verifyToken');

dotenv.config();

//CONNECT Database
if(mongoose.connect(process.env.MONGODB_URL)) {
    console.log('Connected to MongoDB');
}

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));


// Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const OrderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
// ...

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/categories', categoryRoutes);
// ...

app.get('/protected-route', verifyToken, (req, res) => {
    // This code will only run if the token is valid
    res.json({ message: 'You have accessed a protected route' });
  });


app.listen(8000, () => {
    console.log('Server running on port 8000');
});

