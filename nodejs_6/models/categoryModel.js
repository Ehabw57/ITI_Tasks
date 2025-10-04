const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3
  }
},{timestamps: true, versionKey: false})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category
