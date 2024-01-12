const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// POST: Thêm đánh giá mới
router.post('/', reviewController.addReview);

// GET: Lấy tất cả đánh giá cho một sản phẩm
router.get('/:productId', reviewController.getProductReviews);

// GET: Lấy tất cả đánh giá cho một sản phẩm
router.get('/', reviewController.getAllProductReviews);

module.exports = router;