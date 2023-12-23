const Product = require('../models/Product'); // Import mô hình sản phẩm

const productController = {
    // GET ALL PRODUCTS
    getAllProducts: async (req, res) => {
        try {
          const products = await Product.find();
          res.status(200).json(products);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    },
    // ADD PRODUCT
    addProduct: async (req, res) => {
        const product = new Product({
          name: req.body.name,
          price: req.body.price,
          decription: req.body.decription
        });
      
        try {
          const newProduct = await product.save();
          res.status(201).json(newProduct);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
    },
    // GET PRODUCT
    getAProduct: async function(req, res) {
        try {
          const product = await Product.findById(req.params.id);
          if (product === null) {
            return res.status(404).json({ message: 'Cannot find product' });
          }
          res.status(200).json(product);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        } 
      }
}

module.exports = productController;