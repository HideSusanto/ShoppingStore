const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: [{ type: String }], // Sử dụng mảng để lưu trữ nhiều hình ảnh
  quantity: Number,
  attributes: [{ color: String }],
  category: String,
  details: String,
});

module.exports = mongoose.model('Product', productSchema);

