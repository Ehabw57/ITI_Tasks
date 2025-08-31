const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

async function createProduct(req, res) {
  try {
    const category = await Category.findById(req.body.category);

    if (!category) {
      return res.status(404).json({ message: "Sorry, categoryId not found" });
    }

    const product = new Product(req.body);
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    products.length
      ? res.json(products)
      : res.json({ message: "sorry No products in the db" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "name",
    );

    !product
      ? res.status(404).json({ message: "sorry product not found" })
      : res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    console.log(deletedProduct);
    deletedProduct
      ? res.json({ message: "product deleted succesfully" })
      : res.json({ message: "sorry product not found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if(!updatedProduct)
      res.status(404).json({message: "sorry product not found"})
    res.json(updatedProduct)
  } catch(err){
    res.json({message: err.message})
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
