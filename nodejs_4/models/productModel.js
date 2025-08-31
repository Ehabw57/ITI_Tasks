const mongoose = require('mongoose')
const CategorySchema = require('./categoryModel')

const ProductSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    required: true
  }
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
