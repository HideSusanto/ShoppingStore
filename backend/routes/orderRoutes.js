const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST: Tạo đơn đặt hàng mới
router.post('/', orderController.addOrder);

// GET: Lấy danh sách đơn đặt hàng
router.get('/', orderController.getAllOrders);

// GET: Lấy 1 đơn đặt hàng
router.get('/:id', orderController.getOrder);

module.exports = router;
