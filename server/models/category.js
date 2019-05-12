const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema ({
  name: String,
  limit: Number,
  color: String,
  collapse: String,
  total: Number
})

module.exports = mongoose.model('Category', CategorySchema)