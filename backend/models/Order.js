const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  products: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product' 
  }],
  totalAmount: Number,
  status: String,
  orderDate: {
    type: Date,
    default: Date.now
  },
  shippingInfo: {
    address: String,
    city: String,
    country: String,
  } 
});

module.exports = mongoose.model('Order', orderSchema);
