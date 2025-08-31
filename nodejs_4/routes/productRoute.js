const productController = require('../controllers/productController')
const express = require('express')
const route = express.Router();

route.post('/',productController.createProduct) 
route.get('/',productController.getAllProducts) 
route.get('/:id',productController.getProductById) 
route.delete('/:id',productController.deleteProduct) 
route.put('/:id',productController.updateProduct) 

module.exports = route
