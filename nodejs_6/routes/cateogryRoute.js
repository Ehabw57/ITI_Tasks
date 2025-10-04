const express = require('express')
const authMiddelWare = require('../middelware/authMiddelware')
const categoryController = require('../controllers/categoryController')

const route = express.Router();

route.post('/', categoryController.createCategory)
route.get('/:id', categoryController.getCategoryById)
route.get('/', authMiddelWare, categoryController.getCategories)
route.delete('/:id', authMiddelWare, categoryController.deleteCategory)

module.exports = route;
