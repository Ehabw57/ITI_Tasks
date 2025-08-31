const Category = require('../models/categoryModel')

async function createCategory(req, res) {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save()
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getCategories(_, res) {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch(err) {
    res.status(500).json({"message": err.message})
  }
}

async function getCategoryById(req, res) {
  try {
    const category = await Category.findById(req.params.id);
    category 
      ? res.json(category)
      : res.status(404).json({"message": "sorry category not found"})
  } catch(err) {
    res.status(500).json({"message": err.message})
  }
}

async function deleteCategory(req, res) {
  try {
    const deletedCate = await Category.deleteOne({_id: req.params.id});
    deletedCate.deletedCount
      ? res.json({"message": "category deleted succesfully"})
      : res.json({"message": "sorry category not found"})
  } catch(err) {
    res.status(500).json({"message": err.message})
  }
}


module.exports = {createCategory, getCategories, getCategoryById, deleteCategory}
