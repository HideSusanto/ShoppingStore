const Category = require('../models/Category');

const categoryController = {
  // ADD A CATEGORY
  addCategory: async (req, res) => {
    const category = new Category({
      name: req.body.name,
      // Các trường khác của category có thể thêm tại đây
    });

    try {
      const newCategory = await category.save();
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // GET ALL CATEGORIES
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // GET A CATEGORY
  getCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (category === null) {
        return res.status(404).json({ message: 'Cannot find product' });
      }
      await Category.findByIdAndRemove(req.params.id)
      res.status(200).json({ message: 'Category deleted successfully' });
    }
    catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

module.exports = categoryController;
