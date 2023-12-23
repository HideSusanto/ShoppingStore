const Order = require('../models/Order'); // Import mô hình đơn đặt hàng

const orderController = {
    // ADD AN ORDER
    addOrder: async (req, res) => {
        const order = new Order({
          products: req.body.products,
          user: req.body.user
        });
      
        try {
          const newOrder = await order.save();
          res.status(201).json(newOrder);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
    // GET ALL ORDERS
    getAllOrders: async (req, res) => {
        try {
          const orders = await Order.find();
          res.json(orders);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    },
    // GET AN ORDER
    getOrder: async(req, res) => {
        try {
            const order = await Order.findById(req.params.id);
            res.status(200).json(order);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = orderController;