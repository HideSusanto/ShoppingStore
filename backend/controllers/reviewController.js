const Review = require('../models/Review');

const reviewController = {
  // Thêm một đánh giá mới
  addReview: async (req, res) => {
    const { user, product, rating, comment } = req.body;

    try {
      const newReview = new Review({ user, product, rating, comment });
      const savedReview = await newReview.save();

      res.status(201).json(savedReview);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Lấy tất cả đánh giá cho một sản phẩm
  getProductReviews: async (req, res) => {
    const productId = req.params.productId;

    try {
      const reviews = await Review.find({ product: productId }).populate('user', 'username usercoverimg');
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAllProductReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};


module.exports = reviewController;