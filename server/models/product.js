const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
  name: String,
  category: String,
  image: String,
  quantity: Number
})

module.exports = mongoose.model('Product', ProductSchema)