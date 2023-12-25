const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const verifyToken = require('../middleware/verifyToken')

// GET: Lấy danh sách sản phẩm
router.get('/',productController.getAllProducts);

// POST: Tạo sản phẩm mới
router.post('/', productController.addProduct);

// GET: Lấy thông tin chi tiết sản phẩm
router.get('/:id', productController.getAProduct);

// DELETE: Xóa một sản phầm
router.delete('/:id', productController.deleteAProduct);


module.exports = router;
