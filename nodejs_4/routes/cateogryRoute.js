const express = require('express')
const categoryController = require('../controllers/categoryController')

const route = express.Router();

route.post('/', categoryController.createCategory)
route.get('/', categoryController.getCategories)
route.get('/:id', categoryController.getCategoryById)
route.delete('/:id', categoryController.deleteCategory)

module.exports = route;
