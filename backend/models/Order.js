const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
