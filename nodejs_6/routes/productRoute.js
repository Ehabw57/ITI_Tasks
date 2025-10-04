const productController = require('../controllers/productController')
const express = require('express')
const authMiddelware = require('../middelware/authMiddelware')
const route = express.Router();

/**
 * @openapi
 * /product:
 *   post:
 *     summary: Add a new product to the DataBase
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - role
 *               - password
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: "ehab"
 *               role:
 *                 type: string
 *                 example: "user"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "123456"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "ehab@gamil.com"
 *     responses:
 *       200:
 *         description: Product Added Successfully
 */
route.post('/',productController.createProduct) 
route.get('/', authMiddelware, productController.getAllProducts) 
/**
 * @openapi
 * /product/{id}:
 *   get:
 *     summary: Get a specifec product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to fetch
 *     responses:
 *       200:
 *         description: product returned success
 *       404:
 *         description: product not found
 *       500:
 *         description: serverSide error
 */

route.get('/:id',productController.getProductById) 
/**
 * @openapi
 * /product/products/view:
 *   get:
 *     summary: get a html view of the products
 *     responses:
 *       200:
 *         description: Page rendeed succesfully
 *       500:
 *         description: server side Error
 */
route.get('/products/view',productController.renderProducts) 
/**
 * @openapi
 * /product/{id}:
 *   delete:
 *     summary: delete a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: product deleted success
 *       404:
 *         description: product not found
 *       500:
 *         description: serverSide error
 */
route.delete('/:id',  productController.deleteProduct) 
route.put('/:id',productController.updateProduct) 

module.exports = route
