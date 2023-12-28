const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// POST: Tạo danh mục mới
router.post('/', categoryController.addCategory);

// GET: Lấy danh sách tất cả danh mục
router.get('/', categoryController.getAllCategories);

// GET: Lấy thông tin chi tiết của một danh mục
router.get('/:id', categoryController.getCategory);

// DELETE: Xóa danh mục
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;