const productController = require('../controllers/productController')
const express = require('express')
const authMiddelware = require('../middelware/authMiddelware')
const route = express.Router();

route.post('/',productController.createProduct) 
route.get('/', authMiddelware, productController.getAllProducts) 
route.get('/:id',productController.getProductById) 
route.get('/products/view',productController.renderProducts) 
route.delete('/:id', authMiddelware, productController.deleteProduct) 
route.put('/:id',productController.updateProduct) 

module.exports = route
